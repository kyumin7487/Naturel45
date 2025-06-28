"use client"

import type React from "react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    const navItems = [
        { path: "/", label: "홈" },
        { path: "/about", label: "소개" },
        { path: "/menu", label: "메뉴" },
        { path: "/gallery", label: "갤러리" },
        { path: "/location", label: "위치" },
        { path: "/contact", label: "연락처" },
        { path: "/reservation", label: "예약" },
    ]

    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <Link to="/" className="header__logo">
                        <div className="header__logo-icon">🍞</div>
                        <div className="header__logo-text">
                            <h1>나튀렐45</h1>
                            <span>NATUREL 45</span>
                        </div>
                    </Link>

                    <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`header__nav-link ${location.pathname === item.path ? "header__nav-link--active" : ""}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <button className="header__menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="메뉴 토글">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
