import validator from 'validator';
// import Inputmask from "inputmask";
import wait from './utils/wait.js';

/*
The form requires 2 mandatory parameters
1) form - selector or HTML element
2) constraints - description of all mandatory fields
Form example
{
form: '#form-main',
constraints: {
name: {
presence: true
},
email: {
presence: true,
email: true
},
phone: {
phone: true
},
message: {
presence: true,
maxLength: 1000,
},
attach: {
size: '2048', //Kb
ext: ['jpg', 'png', 'pdf']
},
}
}

Property description
Each input type has its own validators.

type="text" || type="textarea"
presence - required field
maxLength - maximum field length
email - checks email for correct input
phone - checks phone with regular expression, expected format: +7(000)0000000 all spaces will be removed from the string during verification

type="file"
presence - required field
size - maximum file size in kb
ext - array of valid file types

type="password"
presence - required field
sync - name of input inside the form with which the main password should be compared

Data attributes are added to the necessary elements of the inputs:
data-input={name} - key input container. All other elements must be inside the element with this attribute.
This element will be assigned classes is-error is-filled is-success etc., and the attribute data-error-type will also be added, which indicates the error type (presence, maxLength etc.)
data-error={name} - the error message will be written here
data-reset-file - file clear button
data-filenames - place to write the names of added files
data-form-response - contents of the message field in the response from the API

To check files, specify the actual file data type, not the extension!
Possible data types:
1. image/svg+xml - .svg
2. image/jpeg - .jpg || .jpeg
3. image/png - .png
4. application/pdf - .pdf
*/

const escapeHtml = (unsafe) => {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

const validators = {
    text: {
        presence: {
            validator: ([value, fieldConstraint]) => !validator.isEmpty(value, { ignore_whitespace: true }),
            errorMessage: 'Field cannot be empty'
        },
        maxLength: {
            validator: ([value, fieldConstraint]) => value.length <= fieldConstraint,
            errorMessage: 'Exceeded character limit'
        },
        minLength: {
            validator: ([value, fieldConstraint]) => value.length >= fieldConstraint,
            errorMessage: 'Incorrect character limit'
        },
        email: {
            validator: ([value, fieldConstraint]) => validator.isEmail(value),
            errorMessage: 'Please enter a valid email address'
        },
        phone: {
            validator: ([value]) => {
                return validator.isMobilePhone(value, 'ru-RU');
                // const trimmed = value.replace(/\s/gi, '');
                // return (/\+\d\(\d\d\d\)\d\d\d\d\d\d\d/).test(trimmed);
            },
            errorMessage: 'Please enter a valid phone number'
        },
    },
    checkbox: {
        presence: {
            validator: ([value, fieldConstraint]) => {
                return value;
            },
            errorMessage: 'Field cannot be empty'
        },
    },
    file: {
        presence: {
            validator: ([value, fieldConstraint, input]) => {
                return !!value[0];
            },
            errorMessage: 'File upload failed. Please try again'
        },
        size: {
            validator: ([value, fieldConstraint, input]) => {
                const invalid = value.filter(f => f.size > fieldConstraint * 1000);

                return invalid.length === 0;
            },
            errorMessage: 'File is too large. Maximum size: 2 MB'
        },
        ext: {
            validator: ([value, fieldConstraint, input]) => {
                const extensions = value.map(f => {
                    return f.type;
                    // return f.name.split('.').at(-1); // только проверка расширения - не надежный метод
                });

                const valid = extensions.some(ext => fieldConstraint.includes(ext));

                return valid;
            },
            errorMessage: 'Unsupported file format. Please upload JPG, PNG or PDF'
        },
    },
    password: {
        presence: {
            validator: ([value, fieldConstraint]) => !validator.isEmpty(value, { ignore_whitespace: true }),
            errorMessage: 'File cannot be empty'
        },
        strength: {
            validator: ([value, fieldConstraint]) => {
                if (typeof fieldConstraint === 'boolean') {
                    return fieldConstraint === validator.isStrongPassword(value, {
                        minLength: 6,
                        minLowercase: 1,
                        minUppercase: 1,
                        minNumbers: 1,
                        minSymbols: 0,
                        returnScore: false,
                        pointsPerUnique: 1,
                        pointsPerRepeat: 0.5,
                        pointsForContainingLower: 10,
                        pointsForContainingUpper: 10,
                        pointsForContainingNumber: 10,
                        pointsForContainingSymbol: 10
                    })
                }

                if (typeof fieldConstraint === 'object') {
                    return validator.isStrongPassword(value, fieldConstraint.options)
                }
            },
            errorMessage: 'Password must contain at least one digit, lowercase and uppercase letter. Minimum length is 6 characters'
        },
        sync: {
            validator: ([value, syncValue]) => {
                if (syncValue === '') return true;

                return value === syncValue;
            },
            errorMessage: 'Passwords do not match'
        }
    },
    number: {
        presence: {
            validator: ([value, fieldConstraint]) => !validator.isEmpty(value, { ignore_whitespace: true }),
            errorMessage: 'Field cannot be empty'
        },
        maxLength: {
            validator: ([value, fieldConstraint]) => value.length <= fieldConstraint,
            errorMessage: 'Exceeded character limit'
        },
        minLength: {
            validator: ([value, fieldConstraint]) => value.length >= fieldConstraint,
            errorMessage: 'Incorrect character limit'
        },
    }
}

const formDataToObject = (form) => {
    const object = {};
    form.forEach((value, key) => {
        object[key] = value;
    });

    return object;
}

// INFO: использовать вместо стандартной new FormData(form); чтобы трансформировать данные перед отправкой, например убирать маску телефона
// TODO: исследовать возможность сделать Proxy объект для инпутов и получения значения value
/* const formData = (form) => {
    const data = new FormData();
    const elts = [...form]
        .filter(elt => elt.tagName === 'INPUT' || elt.tagName === 'TEXTAREA')
        .map(input => {
            let value = input.imask ? input.imask.unmaskedValue : input.value;

            if (input.type === 'file') {
                [...input.files]?.map(f => data.append(input.name, f));
            } else {
                data.append(input.name, value);
            }

            return input;
        });

    return data;
} */

class Form {
    constructor(options) {
        const constraints = {
            email: {
                presence: true,
                email: true,
            }
        };

        this.options = {
            constraints,
            onChange: (target, errors) => {},
            onGroupChange: (group) => {},
            clearForm: true,
            beforeSubmit: null,
            onSubmit: null,
            afterSubmit: null,
            showAllErrors: false,
            ...options
        };

        this.form = this.options.form;

        this.inputs = [...this.form.querySelectorAll('input:not([type="hidden"]), textarea')];
        this.inputsKV = {};
        this.inputs.map(i => {
            this.inputsKV[i.name] = i;
        });

        this.fileInputs = this.inputs.filter(i => i.type === 'file');
        this.formResponse = this.form.querySelector('[data-form-response]');
        this.hasErrors = [];

        this.currentGroup = 0;
        this.maxGroup = Math.max(...Object.keys(this.options.constraints).map((key, i) => this.options.constraints[key].group)) || 0;
        this.groupBackButton = this.form.querySelector(this.options.groupBackButton);

        this.lengthCounters = this.form.querySelectorAll('[data-length]');

        if (this.lengthCounters) {
            [...this.form.querySelectorAll('[data-length]')].map(i => {
                const elt = i.parentElement.querySelector('input, textarea');

                elt?.addEventListener('input', (e) => this.countValueLength(e.target, i))
            })
        }

        this.form.addEventListener('focusout', (e) => {
            this.checkInputsFill();
        });

        this.form.addEventListener('input', (e) => {
            this.checkInputsFill();
        });

        this.form.addEventListener('change', (e) => {
            this.onChange(e.target, e)
        });

        this.form.addEventListener('submit', (e) => {
            // FIXME: отправка через Enter происходит на фоне и никак не отображается
            this.onSubmit(e);
            e.preventDefault();
            return false;
        });

        this.groupBackButton?.addEventListener('click', (e) => {
            this.setGroup(this.currentGroup - 1);
            e.preventDefault();
            return false;
        });

        this.fileInputs.forEach(input => {
            const container = input.closest('[data-input]');
            const resetBtn = container.querySelector('[data-reset-file]');

            container.addEventListener('dragover',  e => this.onDragOver(e, container));
            container.addEventListener('dragleave', e => this.onDragLeave(e, container));
            resetBtn.addEventListener('click', e => this.onFileReset(e, input));
        });

        this.initMasks();
        this.checkInputsFill();
    }

    initMasks = () => {
        this.inputs.map(input => {
            const mask = this.options.constraints[input.name]?.mask;

            /* if (mask !== undefined) {
                const maskProps = typeof mask === 'string' ? { mask } : mask;
                const im = new Inputmask(maskProps);
                im.mask(input);
            } */
        });
    }

    checkInputsFill = () => {
        this.inputs.map(i => {
            let value = i.value.length;
            if (i.type === 'file') value = i.files.length;

            i.closest('[data-input]')?.classList.toggle('is-filled', value);
        });
    }

    onChange = (target, e) => {
        this.formResponse.innerText = '';

        const errors = this.validateField(target, this.options.constraints[target.name]);

        if (errors.length) {
            this.hasErrors.push([...errors]);
        }

        if (target.type === 'file') {
            [...target.files].length && this.onDrop(target.closest('[data-input]'));
            this.updateFileInput(target);
        }

        this.renderFieldStates(target, errors);

        this.options.onChange(target, errors);
    }

    onSubmit = async (e) => {
        this.hasErrors = [];

        this.inputs.map(i => {
            this.onChange(i);
        });

        if (this.hasErrors.length) {
            e.preventDefault();
            return false;
        } else {
            if (this.currentGroup < this.maxGroup) {
                this.setGroup(this.currentGroup + 1);

                e.preventDefault();
                return false;
            }
        }

        if (this.options.onSubmit) {
            return this.options.onSubmit(e, this.form);
        }

        this.formResponse.innerText = '';
        this.form.classList.remove('is-success');
        this.form.classList.add('is-loading');

        if (this.form.getAttribute('action')) {
            let params = {};

            if (this.form.getAttribute('method')?.toLowerCase() === 'post') {
                params = {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(formDataToObject(new FormData(this.form)))
                }
            } else {
                //get request, do nothing
            }

            this.options.beforeSubmit && this.options.beforeSubmit(params, this);

            await wait(500);

            const response = await fetch(this.form.getAttribute('action'), params)
                .then(r => r.json())
                .catch(r => {
                    return {
                        code: 500,
                        message: 'There was an error sending the form. Please try again later',
                    }
                });


            if (response.code === 200) {
                this.form.classList.add('is-success');
                this.removeSuccessTimer();
            } else {
                this.form.classList.add('is-error');
            }

            if (response.message) {
                if (this.formResponse) {
                    if (response.redirect) {
                        this.formResponse.innerText = '';
                    } else {
                        this.formResponse.innerText = response.message;
                    }
                }
            }

            if (response.redirect) {
                return location.assign(response.redirect);
            }


            this.form.classList.remove('is-loading');

            if (this.options.clearForm) {
                this.clearForm();
            }

            this.options.afterSubmit && this.options.afterSubmit(response, this);

            e.preventDefault();
            return false;
        } else {
            // Можно удалить этот кусок
            console.log('FAKE REQUEST ONLY FOR DEVELOPMENT');
            this.options.beforeSubmit && this.options.beforeSubmit({
                method: 'POST',
                body: new FormData(this.form)
            }, this);
            await wait(1500);

            this.form.classList.remove('is-loading');
            this.form.classList.add('is-success');
            this.removeSuccessTimer();
            this.formResponse.innerText = 'Fake request success. Add the "action" and POST method attributes to the <form> tag for real requests';

            if (this.options.clearForm) {
                this.clearForm();
            }

            this.options.afterSubmit && this.options.afterSubmit({ code: 200, message: 'Success' }, this);

            e.preventDefault();
            return false;
        }
    }

    setGroup = (group) => {
        if (group < 0 || group > this.maxGroup) return;

        this.currentGroup = group;
        this.form.dataset.state = group;
        this.options.onGroupChange(group);
    }

    clearForm = () => {
        this.inputs.map(i => {
            if (i.type === 'file') {
                i.files = null;
            }

            i.value = null;

            i.closest('[data-input]')?.classList.remove('is-filled');
            i.closest('[data-input]')?.classList.remove('is-error');
        });

        this.checkInputsFill();
    }

    onDragOver = (e, container) => {
        container.classList.add('is-active');
    }

    onDragLeave = (e, container) => {
        container.classList.remove('is-active');
    }

    onDrop = (container) => {
        container.classList.remove('is-active');
        container.classList.add('is-filled');
    }

    validateField = (input, constraints) => {
        let value = input.inputmask ? input.inputmask.unmaskedvalue() : input.value;

        if (constraints?.phone) {
            value = '7' + value;
        }

        const field = input.name;
        let type = input.type === 'textarea' ? 'text' : input.type;

        if (!constraints) {
            return false;
        }

        if (constraints.group !== undefined && constraints.group !== this.currentGroup) {
            console.log('skip group fields', this.currentGroup);
            return false;
        }

        let errors = [];

        errors = Object.keys(constraints).map((key, i) => {
            const constraintsValue = constraints[key];

            if (key === 'group' || key === 'mask') {
                return false;
            }

            const validatorItem = validators[type][key];

            let params;

            if (type === 'text' || type === 'textarea') {
                params = [value, constraintsValue];
            }

            if (type ==='password') {
                if (key === 'sync') {
                    const syncValue = this.form.querySelector(`[name="${constraintsValue}"]`).value;
                    params = [value, syncValue];
                } else {
                    params = [value, constraintsValue];
                }
            }

            if (type === 'file') {
                const files = input.files && [...input.files];

                if (!files.length && !constraints.presence) {
                    return false;
                }

                params = [files, constraintsValue, input];
            }

            if (type === 'checkbox') {
                params = [input.checked, constraintsValue];
            }

            if (type === 'number') {
                params = [value, constraintsValue];
            }

            const valid = constraintsValue?.validator?.(params) || validatorItem.validator(params);

            if (valid) return false; // если нет ошибок, то возвращаем false. Иначе возвращаем объект с ошибкой

            return {
                field,
                key,
                valid,
                value,
                group: constraints.group || 0,
                message: constraintsValue?.errorMessage || validatorItem.errorMessage
            }
        }).filter(v => v);

        return errors.length
            ? this.options.showAllErrors ? errors : [errors[0]]
            : false;
    }

    onFileReset = (e, input) => {
        input.value = null;
        input.files = null;

        input.closest('[data-input]').classList.remove('is-filled');
        input.closest('[data-input]').classList.remove('is-active');
        input.closest('[data-input]').classList.remove('is-success');

        this.onChange(input);

        e.preventDefault();
        return false;
    }

    updateFileInput = (input) => {
        const nameContainer = input.closest('[data-input]').querySelector('[data-filenames]');
        const names = [...input.files].map(file => {
            const r = file.name.match(/(^.*)(\..*)$/);
            return ` <span>${escapeHtml(r[1])}</span><span>${escapeHtml(r[2])}</span>`;
        });

        nameContainer.innerHTML = names.join(', ');
    }

    renderFieldStates = (target, errors) => {
        if (!target.name) {
            console.error('Attribute "name" required for each field', target);
            return;
        }

        const errField = this.form.querySelector(`[data-error=${target.name}]`) || target.closest('[data-input]').querySelector('[data-error]');
        if (!errField) return;
        const container = errField.closest('[data-input]');

        if (!errors) {
            delete container.dataset.errorType;
            container.classList.remove('is-error');
            container.classList.add('is-success');
            target.type !== 'file' && target.value.length && container.classList.add('is-filled');
            errField.innerText = '';
            return;
        }

        const errs = errors.map(err => err.message).join('. ');
        container.classList.toggle('is-filled', target.value.length);

        errField.innerText = errs;
        container.dataset.errorType = errors.map(e => e.key).join(' ');
        container.classList.remove('is-success');
        container.classList.add('is-error');
    }

    countValueLength = (input, target) => {
        target.innerText = `${input.value.length}/${target.dataset.length}`;
    }

    removeSuccessTimer = () => {
        this.successTimeout && clearTimeout(this.successTimeout);

        this.successTimeout = setTimeout(() => {
            this.form.classList.remove('is-success');
        }, 3000);
    }
}

const FormFactory = (forms) => {
    return forms.map((options) => {
        const form = options.form.nodeType === Node.ELEMENT_NODE ? options.form : document.querySelector(options.form);

        if (!form) return;

        return new Form({
            ...options,
            form
        });
    }).filter(f => f);
}

export default FormFactory;
export { formDataToObject };