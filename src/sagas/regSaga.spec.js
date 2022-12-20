import {recordSaga} from './recordSaga'
import {registration} from './../actions'
import {serverRegister} from './../api.js'
import {registrationSaga} from './regSaga'

jest.mock("./../api.js", () => ({serverRegister:jest.fn(() => true)}))

describe("regSaga", () => {
    describe("#REG", () => {
        it("registratons throudh api", async () => {
            const dispatched = await recordSaga(
                registrationSaga,
                registration("testlogin", "testpassword", "testname")
            )
            
            
            expect(serverRegister).toBeCalledWith("testlogin", "testpassword", "testname")
            expect(dispatched).toBeCalledWith({
                type: "LOG_IN"
            })
        })
    })
})