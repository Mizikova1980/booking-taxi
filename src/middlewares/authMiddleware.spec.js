import {authMiddleware} from './authMiddleware'
import {authenticate} from './../actions'
import {serverLogin} from './../api.js'

jest.mock("./../api.js", () => ({serverLogin:jest.fn(() => true)}))

describe("authMiddleware", () => {
    describe("#AUTHENTICATE", () => {
        it("authenticates throudh api", async () => {
            const dispatch = jest.fn()

            await authMiddleware({dispatch})()(
                authenticate("testlogin", "testpassword")
            )

            expect(serverLogin).toBeCalledWith("testlogin", "testpassword")
            expect(dispatch).toBeCalledWith({
                type: "LOG_IN"
            })
        })
    })
})