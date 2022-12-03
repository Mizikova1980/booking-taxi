import React from "react"
import Profile from './Profile'
import { render, screen } from "@testing-library/react"


describe("Profile", () => {
    it("renders correctly", () => {
        render(<Profile/>)
        screen.getByLabelText('Имя владельца')
        
    })
})