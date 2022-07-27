
const messageMap = {
  404: "Pokemon não encontrado",
  500: "Serviço indisponível"
}

module.exports = (err, request, response, next) => {
  let errorResponse = {
    isError: true
  }

  if (err.isAxiosError && err.response) {
    const { message, status } = err.response
    errorResponse = {
      ...errorResponse,
      message,
      status
    }
    errorResponse.message = messageMap[err.response.status]
    return response.status(err.response.status).json(errorResponse)
  }

  console.error(err.stack)
  response.status(500).json(messageMap[500])
}
