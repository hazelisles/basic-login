function checkAccount(account) {
  const users = [
    {
      firstName: 'Tony',
      email: 'tony@stark.com',
      password: 'iamironman'
    },
    {
      firstName: 'Steve',
      email: 'captain@hotmail.com',
      password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      email: 'nick@shield.com',
      password: 'password'
    }
  ]

  const result = users.find(user => user.email === account.email && user.password === account.password)

  const response = {
    name: null,
    status: true,
    email: null
  }

  if (account.hold) {
    response.email = account.email
  }
  if (result) {
    response.name = result.firstName
  } else {
    response.status = false
  }

  return response
}

module.exports = checkAccount