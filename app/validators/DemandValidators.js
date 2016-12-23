export default DemandValidators = {
  radius: {
    title: 'Raio',
    validate: [{
      validator: 'isNumeric',
    }]
  },
  name: {
    title: 'O que você precisa?',
    validate: [{
      validator: 'isLength',
      arguments: [1, 255],
    }]
  },
  description: {
    title: 'Para que você vai usar?',
    validate: [{
      validator: 'isLength',
      arguments: [1, 255],
    }]
  },
  errorMessage: () => 'Oops! Ocorreu um erro ao acessar nosso servidor. Por favor, tente novamente.',
}
