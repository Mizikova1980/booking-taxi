
import React from "react"
import Home from './Home'
import { render, fireEvent} from '@testing-library/react'

jest.mock("./../FormBooking/FormBooking.jsx", () => ({ FormBooking: () => <div>Map component</div>}))
jest.mock('./../Profile/Profile.jsx', () => ({ Profile: () => <div>Profile component</div>}))
jest.mock('./../Login/Login.jsx', () => ({ Login: () => <div>Login component</div>}))

describe("Home", () => {
    it("renders correctly", () => {
        const {container} = render(<Home/>)
        expect(container.innerHTML).toMatch("Map component")
    })

    describe("when clicked от navigation buttons", () => {
        it("opens the corresponding page", () => {
            const { getByTex, container} = render(<Home/>)
            fireEvent.click(container.getByText('Профиль'))
            expect(container.innerHTML).toMatch("Profile componen")
            fireEvent.click(container.getByText('Карта'))
            expect(container.innerHTML).toMatch("Map component")
            fireEvent.click(container.getByText('Выйти'))
            expect(container.innerHTML).toMatch("Login component")
        })
    })
})