module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'components/{{name}}/{{name}}.js',
        templateFile: 'plop-templates/component.js.hbs'
      },
      {
        type: 'add',
        path: 'components/{{name}}/{{name}}.module.css',
        templateFile: 'plop-templates/component.module.css.hbs'
      }
    ]
  });
};