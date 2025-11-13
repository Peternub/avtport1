import React from 'react';

const PricingSection = () => {
  const pricingPlans = [
    {
      id: 1,
      title: "Телеграм бот \"Самоответчик\"",
      price: "8000",
      features: [
        "Бот для автоматического ответа на вопросы",
        "Возможность бронирования услуг",
        "Сохранение данных в Google Sheets"
      ]
    },
    {
      id: 2,
      title: "Страница на вашем сайте \"Связаться со мной\"",
      price: "8000",
      features: [
        "Форма обратной связи на вашем сайте",
        "Автоматическая обработка сообщений",
        "Сохранение данных в Google Sheets"
      ]
    },
    {
      id: 3,
      title: "Телеграм бот \"Самоответчик\" + индивидуальный сайт",
      price: "11000-14000",
      features: [
        "Полнофункциональный Telegram бот",
        "Индивидуальный сайт под ваш бизнес",
        "Интеграция всех компонентов"
      ]
    },
    {
      id: 4,
      title: "Страница на вашем сайте \"Связаться со мной\" + индивидуальный сайт",
      price: "11000-14000",
      features: [
        "Индивидуальный сайт под ваш бизнес",
        "Форма обратной связи с автоматизацией",
        "Полная интеграция решений"
      ]
    },
    {
      id: 5,
      title: "Индивидуальная Автоматизация",
      price: "от 10000",
      features: [
        "Разработка под конкретные задачи бизнеса",
        "Индивидуальный подход к каждому проекту",
        "Полная автоматизация процессов"
      ]
    }
  ];

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <h2>Стоимость</h2>
        <div className="pricing-grid">
          {pricingPlans.map(plan => (
            <div key={plan.id} className="pricing-card">
              <div className="pricing-header">
                <h3>{plan.title}</h3>
                <div className="price">{plan.price} ₽</div>
              </div>
              <div className="pricing-features">
                <ul>
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <button className="pricing-btn">Заказать</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;