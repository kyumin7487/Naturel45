import type React from "react"
import { Link } from "react-router-dom"

const Home: React.FC = () => {
    const features = [
        {
            icon: "❤️",
            title: "정성스러운 손길",
            description: "매일 새벽부터 정성스럽게 반죽하고 구워내는 신선한 빵",
        },
        {
            icon: "⭐",
            title: "엄선된 재료",
            description: "자연스럽고 건강한 재료만을 사용한 프리미엄 베이커리",
        },
        {
            icon: "☕",
            title: "따뜻한 공간",
            description: "편안하고 아늑한 분위기에서 즐기는 특별한 시간",
        },
    ]

    const todaySpecial = [
        { name: "크루아상", price: "2,500원", badge: "인기" },
        { name: "단팥빵", price: "2,000원", badge: "추천" },
        { name: "치즈케이크", price: "3,500원", badge: "NEW" },
    ]

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero__content">
                        <div className="hero__badge">📍 경남 창원 북면</div>
                        <h1 className="hero__title">나튀렐45</h1>
                        <p className="hero__subtitle">
                            매일 아침 정성스럽게 구워내는 신선한 빵과
                            <br />
                            따뜻한 마음으로 여러분을 맞이하는
                            <br />
                            창원 북면의 작은 베이커리입니다.
                        </p>
                        <div className="hero__actions">
                            <Link to="/menu" className="btn btn--primary">
                                📋 메뉴 보기
                            </Link>
                            <Link to="/reservation" className="btn btn--secondary">
                                📞 예약하기
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Today's Special */}
            <section className="today-special">
                <div className="container">
                    <h2 className="section-title">오늘의 특선</h2>
                    <div className="today-special__grid">
                        {todaySpecial.map((item, index) => (
                            <div key={index} className="today-special__item">
                                <div className="today-special__badge">{item.badge}</div>
                                <div className="today-special__icon">🥐</div>
                                <h3>{item.name}</h3>
                                <p className="price">{item.price}</p>
                            </div>
                        ))}
                    </div>
                    <div className="today-special__notice">⏰ 당일 구운 빵은 오전 9시부터 판매됩니다</div>
                </div>
            </section>

            {/* Features */}
            <section className="features">
                <div className="container">
                    <h2 className="section-title">우리의 특별함</h2>
                    <div className="features__grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-card__icon">{feature.icon}</div>
                                <h3 className="feature-card__title">{feature.title}</h3>
                                <p className="feature-card__description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews */}
            <section className="reviews">
                <div className="container">
                    <h2 className="section-title">고객 후기</h2>
                    <div className="reviews__grid">
                        <div className="review-card">
                            <div className="review-card__rating">⭐⭐⭐⭐⭐</div>
                            <p className="review-card__text">
                                "창원 북면 빵집 나튀렐45에서 정말 맛있는 빵을 맛볼 수 있었어요. 나튀렐은 제가 참외하면서 1등으로
                                좋아하는 빵집이에요!"
                            </p>
                            <div className="review-card__author">
                                <span>네이버 블로그 후기</span>
                                <a
                                    href="https://blog.naver.com/eolrung_ddungddang/223540483194"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    후기 보기 →
                                </a>
                            </div>
                        </div>
                        <div className="review-card">
                            <div className="review-card__rating">⭐⭐⭐⭐⭐</div>
                            <p className="review-card__text">
                                "창원 북면에 위치한 나튀렐45! 정말 맛있는 빵들이 가득한 곳이에요. 신선하고 정성스럽게 만든 빵의 맛이
                                일품입니다."
                            </p>
                            <div className="review-card__author">
                                <span>네이버 블로그 후기</span>
                                <a href="https://m.blog.naver.com/dkxm32/223746226151" target="_blank" rel="noopener noreferrer">
                                    후기 보기 →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <div className="container">
                    <div className="cta__content">
                        <h2>지금 바로 방문해보세요!</h2>
                        <p>신선한 빵과 따뜻한 서비스가 기다리고 있습니다</p>
                        <div className="cta__actions">
                            <Link to="/location" className="btn btn--primary">
                                📍 위치 보기
                            </Link>
                            <a
                                href="https://www.instagram.com/naturel_45/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn--secondary"
                            >
                                📸 인스타그램
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
