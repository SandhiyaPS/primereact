const CheckboxProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'inputId',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the inner native radiobutton.'
    },
    {
        name: 'value',
        type: 'any',
        default: 'null',
        description: 'Value of the checkbox.'
    },
    {
        name: 'name',
        type: 'string',
        default: 'null',
        description: 'Name of the checkbox element .'
    },
    {
        name: 'checked',
        type: 'boolean',
        default: 'false',
        description: 'Specifies whether a checkbox should be checked or not.'
    },
    {
        name: 'style',
        type: 'string',
        default: 'null',
        description: 'Inline style of the element.'
    },
    {
        name: 'className',
        type: 'string',
        default: 'null',
        description: 'Style class of the element.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the element value cannot be altered.'
    },
    {
        name: 'required',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that an input field must be filled out before submitting the form.'
    },
    {
        name: 'readOnly',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the element cannot be typed.'
    },
    {
        name: 'tabIndex',
        type: 'number',
        default: 'null',
        description: 'Index of the element in tabbing order.'
    },
    {
        name: 'tooltip',
        type: 'any',
        default: 'null',
        description: 'Content of the tooltip.'
    },
    {
        name: 'tooltipOptions',
        type: 'object',
        default: 'null',
        description: 'Configuration of the tooltip, refer to the tooltip documentation for more information.'
    },
    {
        name: 'ariaLabelledBy',
        type: 'string',
        default: 'null',
        description: 'Establishes relationships between the component and label(s) where its value should be one or more element IDs.'
    }
];

const CheckboxEvents = [

];

const CheckboxStyles = [
    { name: 'p-checkbox', description: 'Container element' },
    { name: 'p-checkbox-box', description: 'Container of icon.' },
    { name: 'p-checkbox-icon', description: 'Icon element.' },
    {
        name: 'p-checkbox-label',
        description: 'Label element and it is an external CSS class.'
    }
];

module.exports = {
    checkbox: {
        name: 'Checkbox',
        description: 'TODO',
        docUrl: 'https://primefaces.org/primereact/showcase/#/checkbox',
        props: CheckboxProps,
        events: CheckboxEvents,
        styles: CheckboxStyles
    }
};