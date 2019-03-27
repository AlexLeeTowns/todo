import faker from 'faker'

export default () => ({
  title: faker.company.bsBuzz(),
  description: faker.company.catchPhrase(),
})
