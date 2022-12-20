import {recordSaga} from './recordSaga'
import {authenticate} from './../actions'
import {serverLogin} from './../api.js'
import {authenticateSaga} from './authSaga'

jest.mock("./../api.js", () => ({serverLogin:jest.fn(() => true)}))

describe("authSaga", () => {
    describe("#AUTHENTICATE", () => {
        it("authenticates throudh api", async () => {
            const dispatched = await recordSaga(
                authenticateSaga,
                authenticate("testlogin", "testpassword")
            )
            
            
            expect(serverLogin).toBeCalledWith("testlogin", "testpassword")
            expect(dispatched).toBeCalledWith({
                type: "LOG_IN"
            })
        })
    })
})