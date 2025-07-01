"use client"

import type React from "react"
import { useState } from "react"

const Reservation: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        date: "",
        time: "",
        type: "pickup",
        items: "",
        quantity: "",
        message: "",
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // 실제로는 서버로 데이터 전송
        alert("예약 신청이 완료되었습니다! 곧 연락드리겠습니다.")
        console.log("예약 데이터:", formData)
    }

    const timeSlots = [
        "09:00",
        "09:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
        "17:00",
        "17:30",
    ]

    return (
        <div className="reservation">
            <div className="container">
                <div className="reservation__header">
                    <h1 className="page-title">예약 주문</h1>
                    <p className="page-subtitle">미리 주문하고 기다림 없이 픽업하세요!</p>
                </div>

                <div className="reservation__content">
                    <div className="reservation__benefits">
                        <h2>예약 주문의 장점</h2>
                        <div className="benefits-grid">
                            <div className="benefit-item">
                                <div className="benefit-item__icon">⏰</div>
                                <h3>시간 절약</h3>
                                <p>기다림 없이 바로 픽업</p>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-item__icon">🎯</div>
                                <h3>확실한 구매</h3>
                                <p>원하는 빵 품절 걱정 없음</p>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-item__icon">💝</div>
                                <h3>특별 할인</h3>
                                <p>예약 주문 시 5% 할인</p>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-item__icon">🏆</div>
                                <h3>VIP 서비스</h3>
                                <p>단골 고객 우대 혜택</p>
                            </div>
                        </div>
                    </div>

                    <form className="reservation__form" onSubmit={handleSubmit}>
                        <div className="form-section">
                            <h3>기본 정보</h3>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">성함 *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">연락처 *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="010-0000-0000"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-section">
                            <h3>픽업 정보</h3>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="date">픽업 날짜 *</label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                        min={new Date().toISOString().split("T")[0]}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="time">픽업 시간 *</label>
                                    <select id="time" name="time" value={formData.time} onChange={handleInputChange} required>
                                        <option value="">시간 선택</option>
                                        {timeSlots.map((time) => (
                                            <option key={time} value={time}>
                                                {time}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="form-section">
                            <h3>주문 정보</h3>
                            <div className="form-group">
                                <label htmlFor="type">주문 유형 *</label>
                                <select id="type" name="type" value={formData.type} onChange={handleInputChange} required>
                                    <option value="pickup">매장 픽업</option>
                                    <option value="catering">케이터링 (10개 이상)</option>
                                    <option value="birthday">생일케이크 주문</option>
                                    <option value="custom">맞춤 제작</option>
                                </select>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="items">주문 품목 *</label>
                                    <input
                                        type="text"
                                        id="items"
                                        name="items"
                                        value={formData.items}
                                        onChange={handleInputChange}
                                        placeholder="예: 식빵 2개, 크루아상 5개"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="quantity">총 수량</label>
                                    <input
                                        type="number"
                                        id="quantity"
                                        name="quantity"
                                        value={formData.quantity}
                                        onChange={handleInputChange}
                                        min="1"
                                        placeholder="개수"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">추가 요청사항</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={4}
                                    placeholder="특별한 요청사항이 있으시면 적어주세요"
                                />
                            </div>
                        </div>

                        <div className="form-actions">
                            <button type="submit" className="btn btn--primary btn--large">
                                📞 예약 신청하기
                            </button>
                            <p className="form-notice">
                                * 예약 신청 후 확인 연락을 드립니다
                                <br />* 케이크류는 최소 하루 전 주문 필요
                            </p>
                        </div>
                    </form>
                </div>

                <div className="reservation__contact">
                    <div className="contact-card">
                        <h3>📞 직접 문의</h3>
                        <p>급한 주문이나 문의사항이 있으시면</p>
                        <div className="contact-methods">
                            <a
                                href="https://www.instagram.com/naturel_45/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-method"
                            >
                                <span className="contact-method__icon">📸</span>
                                <span>인스타그램 DM</span>
                            </a>
                            <div className="contact-method">
                                <span className="contact-method__icon">⏰</span>
                                <span>영업시간: 07:00 - 20:00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reservation
