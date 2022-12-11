import React from "react"
import { useNavigate } from "react-router-dom"

export default function PageContent ({children}) {
    const navigate = useNavigate()

    return (
        <div className="Page-content-wrapp" onClick={e => navigate('/')}>
            <div className="Page-content" onClick={e => e.stopPropagation()}>{children}</div>
        </div>
    )


}