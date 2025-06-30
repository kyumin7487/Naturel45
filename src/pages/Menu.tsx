"use client"

import type React from "react"
import { useState } from "react"

const Menu: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState("bread")

    const categories = [
        { id: "bread", name: "빵류", icon: "🍞" },
        { id: "cake", name: "케이크", icon: "🎂" },
        { id: "pastry", name: "페이스트리", icon: "🥐" },
        { id: "drink", name: "음료", icon: "☕" },
    ]

    const menuItems = {
        bread: [
            { name: "식빵", price: "4,000원", description: "부드럽고 촉촉한 수제 식빵", popular: true },
            { name: "단팥빵", price: "2,000원", description: "달콤한 팥이 가득한 전통 단팥빵", popular: false },
            { name: "크림빵", price: "2,500원", description: "부드러운 크림이 들어간 빵", popular: false },
            { name: "소보로빵", price: "2,200원", description: "바삭한 소보로가 올라간 빵", popular: true },
            { name: "마늘빵", price: "3,000원", description: "고소한 마늘 향이 일품인 빵", popular: false },
            { name: "치즈빵", price: "2,800원", description: "진한 치즈가 들어간 고소한 빵", popular: true },
        ],
        cake: [
            { name: "치즈케이크", price: "3,500원", description: "진한 치즈의 맛이 일품인 케이크", popular: true },
            { name: "초콜릿케이크", price: "4,000원", description: "진한 초콜릿의 달콤함", popular: false },
            { name: "딸기케이크", price: "4,500원", description: "신선한 딸기가 올라간 케이크", popular: true },
            { name: "티라미수", price: "4,200원", description: "이탈리아 전통 디저트", popular: false },
        ],
        pastry: [
            { name: "크루아상", price: "2,500원", description: "버터 향이 가득한 프랑스식 크루아상", popular: true },
            { name: "데니쉬", price: "3,000원", description: "바삭하고 달콤한 데니쉬", popular: false },
            { name: "파이", price: "3,200원", description: "바삭한 파이 생지에 달콤한 필링", popular: false },
            { name: "타르트", price: "3,800원", description: "과일이 올라간 미니 타르트", popular: true },
        ],
        drink: [
            { name: "아메리카노", price: "2,000원", description: "진한 에스프레소의 깊은 맛", popular: true },
            { name: "카페라떼", price: "2,500원", description: "부드러운 우유와 에스프레소의 조화", popular: true },
            { name: "카푸치노", price: "2,800원", description: "풍성한 거품이 올라간 커피", popular: false },
            { name: "핫초콜릿", price: "3,000원", description: "진한 초콜릿의 달콤함", popular: false },
        ],
    }

    return (
        <div className="menu">
            <div className="container">
                <div className="menu__header">
                    <h1 className="page-title">메뉴</h1>
                    <p className="page-subtitle">매일 신선하게 구워내는 나튀렐45의 메뉴를 소개합니다</p>
                </div>

                <div className="menu__categories">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`menu__category ${activeCategory === category.id ? "menu__category--active" : ""}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            <span className="menu__category-icon">{category.icon}</span>
                            <span className="menu__category-name">{category.name}</span>
                        </button>
                    ))}
                </div>

                <div className="menu__content">
                    <div className="menu__grid">
                        {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
                            <div key={index} className="menu-item">
                                {item.popular && <div className="menu-item__badge">인기</div>}
                                <div className="menu-item__image">
                                    <div className="menu-item__placeholder">🥖</div>
                                </div>
                                <div className="menu-item__content">
                                    <h3 className="menu-item__name">{item.name}</h3>
                                    <p className="menu-item__description">{item.description}</p>
                                    <div className="menu-item__price">{item.price}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="menu__notice">
                    <div className="notice-card">
                        <h3>📢 주문 안내</h3>
                        <ul>
                            <li>• 케이크류는 하루 전 예약 주문을 권장합니다</li>
                            <li>• 대량 주문 시 2-3일 전 미리 연락 부탁드립니다</li>
                            <li>• 가격은 변동될 수 있습니다</li>
                            <li>• 품절 시 양해 부탁드립니다</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
