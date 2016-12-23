export default MessageValidators = {
  text: {
    title: 'Texto',
    validate: [{
      validator: 'isLength',
      arguments: [1, 255],
    }]
  },
  errorMessage: () => 'Oops! Ocorreu um erro ao acessar nosso servidor. Por favor, tente novamente.',
}
