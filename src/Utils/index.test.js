import { fDate, getMember } from './index'

describe('It should format date', () => {
  it('should format date', () => {
    let date = '2017-02-09T04:27:38Z'
    it(expect(fDate(date)).toEqual('Thursday 9 February 2017 - 04:27:38'))
  })

  it('should format date timestamp', () => {
    let date = 269132400000
    it(expect(fDate(date)).toEqual('Thursday 13 July 1978 - 00:00:00'))
  })
})


describe('should get member details', () => {
  const members = [{
    "id": "e837c9f5-247f-445f-bcc3-7d434348336b",
    "firstName": "Martin",
    "lastName": "Bradley",
    "email": "mbradley0@google.it",
    "avatar": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    "ip": "166.124.172.160"
  },
  {
    "id": "cae5d3af-9ac7-471e-9061-e2e9d75f00e4",
    "firstName": "Helen",
    "lastName": "Hawkins",
    "email": "hhawkins1@posterous.com",
    "avatar": "http://dummyimage.com/100x100.jpg/dddddd/000000",
    "ip": "179.239.189.173"
  }]

  it('should get member firstName', () => {
    it(expect(getMember('cae5d3af-9ac7-471e-9061-e2e9d75f00e4', members).firstName)
      .toEqual('Helen'))
  })

  it('should get member lastName', () => {
    it(expect(getMember('cae5d3af-9ac7-471e-9061-e2e9d75f00e4', members).lastName)
      .toEqual('Hawkins'))
  })

    it('should get member email', () => {
    it(expect(getMember('cae5d3af-9ac7-471e-9061-e2e9d75f00e4', members).email)
      .toEqual('hhawkins1@posterous.com'))
  })

})
