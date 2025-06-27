import type React from "react"

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__logo">
                        <div className="footer__logo-icon">🍞</div>
                        <h4>나튀렐45</h4>
                    </div>
                    <p className="footer__info">경상남도 창원시 북면</p>
                    <p className="footer__info">영업시간: 07:00 - 20:00 (월요일 휴무)</p>
                    <div className="footer__social">
                        <a
                            href="https://www.instagram.com/naturel_45/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-method"
                        >
                            📸 Instagram
                        </a>
                    </div>
                    <p className="footer__copyright">© 2024 나튀렐45. 매일 신선하게 구워내는 정성스러운 빵집</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
