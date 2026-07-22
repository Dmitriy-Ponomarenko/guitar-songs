import { useMemo, useState } from "react";
import { SongCard } from "../Components/SongCard";
import styles from "../styles/HomePage.module.css";

type Song = {
  id: number;
  title: string;
  artist: string;
  genre: string;
  mood: string;
  image: string;
  description: string;
};

const songs: Song[] = [
  {
    id: 1,
    title: "Дождь",
    artist: "ДДТ",
    genre: "Рок",
    mood: "Тепло",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Глубокая и атмосферная баллада для вечернего выступления.",
  },
  {
    id: 2,
    title: "Кофта пахнет твоим домом",
    artist: "Right Person",
    genre: "Альтернатива",
    mood: "Нежно",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80",
    description: "Лиричная и очень узнаваемая песня с характерной подачей.",
  },
  {
    id: 3,
    title: "Просвистела",
    artist: "ДДТ",
    genre: "Рок",
    mood: "Сильно",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    description: "Броская и эмоциональная композиция с мощной энергетикой.",
  },
  {
    id: 4,
    title: "Я так соскучился",
    artist: "Порнофильмы",
    genre: "Рок",
    mood: "Откровенно",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    description: "Живая и чувственная песня с ярким характером.",
  },
  {
    id: 5,
    title: "Confortas Pero Dañas",
    artist: "Kidd Voodoo",
    genre: "Инди",
    mood: "Ритмично",
    image:
      "https://images.unsplash.com/photo-1458560871784-56d23406c091?auto=format&fit=crop&w=900&q=80",
    description: "Уникальный и стильный номер с плотным ритмом.",
  },
  {
    id: 6,
    title: "Creep",
    artist: "Radiohead",
    genre: "Альтернативный рок",
    mood: "Тревожно",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    description: "Сильная и запоминающаяся песня для эффектного исполнения.",
  },
  {
    id: 7,
    title: "Smells Like Teen Spirit",
    artist: "Nirvana",
    genre: "Гранж",
    mood: "Бурно",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Классика с мощной динамикой и узнаваемым звучанием.",
  },
  {
    id: 8,
    title: "Крылья",
    artist: "Nautilus Pompilius",
    genre: "Рок",
    mood: "Возвышенно",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    description:
      "Эмоциональная и яркая песня с большим пространством для исполнения.",
  },
  {
    id: 9,
    title: "Tonight",
    artist: "Amira Elfeky",
    genre: "Поп",
    mood: "Энергично",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Современная композиция с сильным вокалом.",
  },
  {
    id: 10,
    title: "Покойник",
    artist: "Леро4ка",
    genre: "Рок",
    mood: "Мрачно",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    description: "Интригующая песня с тёмным характером.",
  },
  {
    id: 11,
    title: "Когда ты улыбаешься",
    artist: "КИССКОЛД",
    genre: "Рок",
    mood: "Позитив",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80",
    description: "Мелодичная и душевная композиция.",
  },
  {
    id: 12,
    title: "Помню",
    artist: "КИССКОЛД",
    genre: "Рок",
    mood: "Ностальгия",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    description: "Лирическая баллада о воспоминаниях.",
  },
  {
    id: 13,
    title: "Что такое осень",
    artist: "ДДТ",
    genre: "Рок",
    mood: "Меланхолия",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    description: "Философская песня об изменениях.",
  },
  {
    id: 14,
    title: "А мы не ангелы, парень",
    artist: "Алексей Понамарёв",
    genre: "Рок",
    mood: "Реальность",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Честная и прямолинейная композиция.",
  },
  {
    id: 15,
    title: "Группа крови",
    artist: "Кино",
    genre: "Рок",
    mood: "Энергия",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80",
    description: "Легендарная песня с неповторимым звучанием.",
  },
  {
    id: 16,
    title: "Перемен",
    artist: "Кино",
    genre: "Рок",
    mood: "Мечта",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    description: "Гимн поколения с вечным посылом.",
  },
  {
    id: 17,
    title: "Кукушка",
    artist: "Кино",
    genre: "Рок",
    mood: "Печаль",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    description: "Трогательная песня о судьбе.",
  },
  {
    id: 18,
    title: "Алюминиевые огурцы",
    artist: "Кино",
    genre: "Рок",
    mood: "Ирония",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Забавная и остроумная композиция.",
  },
  {
    id: 19,
    title: "Вечно молодой",
    artist: "Смысловые Галлюцинации",
    genre: "Рок",
    mood: "Позитив",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80",
    description: "Жизнеутверждающая песня о молодости.",
  },
  {
    id: 20,
    title: "Слишком влюблен",
    artist: "Нервы",
    genre: "Рок",
    mood: "Романтика",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    description: "Нежная песня о чувствах.",
  },
  {
    id: 21,
    title: "Вороны",
    artist: "Нервы",
    genre: "Рок",
    mood: "Мрачность",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    description: "Атмосферная композиция с тёмными нотками.",
  },
  {
    id: 22,
    title: "Кофе мой друг",
    artist: "Нервы",
    genre: "Рок",
    mood: "Лёгкость",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Весёлая песня о простых радостях жизни.",
  },
  {
    id: 23,
    title: "Самый дорогой человек",
    artist: "Нервы",
    genre: "Рок",
    mood: "Чувства",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80",
    description: "Глубокая песня о людях, которые нам дороги.",
  },
  {
    id: 24,
    title: "Батареи",
    artist: "Нервы",
    genre: "Рок",
    mood: "Социальность",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    description: "Популярная песня о повседневной жизни.",
  },
  {
    id: 25,
    title: "Районы-кварталы",
    artist: "Zveri",
    genre: "Рок",
    mood: "Город",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    description: "Энергичная композиция о городе.",
  },
  {
    id: 26,
    title: "Родина",
    artist: "ДДТ",
    genre: "Рок",
    mood: "Патриотизм",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Мощная песня о любви к отечеству.",
  },
  {
    id: 27,
    title: "Андеграунд",
    artist: "Йорш",
    genre: "Рок",
    mood: "Бунт",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80",
    description: "Революционная композиция с духом свободы.",
  },
  {
    id: 28,
    title: "Планы",
    artist: "Владимир Клявин",
    genre: "Рок",
    mood: "Размышление",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    description: "Философская песня о жизненных планах.",
  },
  {
    id: 29,
    title: "Черновичок",
    artist: "Владимир Клявин",
    genre: "Рок",
    mood: "Нежность",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    description: "Лирическая миниатюра с поэтичным звучанием.",
  },
  {
    id: 30,
    title: "Беспечные Ангелы",
    artist: "Ария",
    genre: "Метал",
    mood: "Могущество",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Мощная композиция с эпическим звучанием.",
  },
  {
    id: 31,
    title: "Штиль",
    artist: "Ария",
    genre: "Метал",
    mood: "Спокойствие",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80",
    description: "Медленная и величественная баллада.",
  },
  {
    id: 32,
    title: "Осколок льда",
    artist: "Ария",
    genre: "Метал",
    mood: "Холод",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    description: "Ледяная и отчаянная композиция.",
  },
  {
    id: 33,
    title: "Потерянный рай",
    artist: "Ария",
    genre: "Метал",
    mood: "Печаль",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    description: "Эпическая баллада о потере.",
  },
  {
    id: 34,
    title: "Бомж",
    artist: "Сектор Газа",
    genre: "Панк-рок",
    mood: "Социальная критика",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Резкая и честная песня о социальных проблемах.",
  },
  {
    id: 35,
    title: "Спокойная ночь",
    artist: "Кино",
    genre: "Рок",
    mood: "Мир",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80",
    description: "Нежная песня-баллада для отдыха.",
  },
  {
    id: 36,
    title: "На заре",
    artist: "Альянс",
    genre: "Рок",
    mood: "Рассвет",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    description: "Эпическая композиция о новом начинании.",
  },
  {
    id: 37,
    title: "Лирика",
    artist: "Сектор Газа",
    genre: "Панк-рок",
    mood: "Сатира",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    description: "Остроумная и провокационная песня.",
  },
  {
    id: 38,
    title: "Все идет по плану",
    artist: "Егор Летов",
    genre: "Панк",
    mood: "Ирония",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Сатирическая песня о суровой реальности.",
  },
  {
    id: 39,
    title: "Молчи",
    artist: "Кис-кис",
    genre: "Рок",
    mood: "Драма",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80",
    description: "Интенсивная композиция с сильным посылом.",
  },
  {
    id: 40,
    title: "Полковнику никто не пишет",
    artist: "Би-2",
    genre: "Рок",
    mood: "Грусть",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    description: "Трагическая песня о одиночестве.",
  },
  {
    id: 41,
    title: "Позови меня тихо по имени",
    artist: "Любэ",
    genre: "Русский рок",
    mood: "Романтика",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    description: "Нежная и чувственная баллада.",
  },
  {
    id: 42,
    title: "Ты неси меня река",
    artist: "Любэ",
    genre: "Русский рок",
    mood: "Движение",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Мощная композиция о потоке жизни.",
  },
  {
    id: 43,
    title: "Конь",
    artist: "Любэ",
    genre: "Русский рок",
    mood: "Свобода",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80",
    description: "Символичная песня о независимости.",
  },
  {
    id: 44,
    title: "Прощай",
    artist: "Мельница",
    genre: "Фолк-рок",
    mood: "Расставание",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    description: "Трогательная баллада о прощании.",
  },
  {
    id: 45,
    title: "Дороги",
    artist: "Мельница",
    genre: "Фолк-рок",
    mood: "Путешествие",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    description: "Эпическая песня о дорогах жизни.",
  },
  {
    id: 46,
    title: "Воин вереска",
    artist: "Мельница",
    genre: "Фолк-рок",
    mood: "Боевой дух",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Мощная композиция о стойкости и воле.",
  },
  {
    id: 47,
    title: "Ай, волна",
    artist: "Мельница",
    genre: "Фолк-рок",
    mood: "Стихия",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80",
    description: "Фольклорная песня о природе и судьбе.",
  },
  {
    id: 48,
    title: "Пополам",
    artist: "БРЕДИШЬ",
    genre: "Рок",
    mood: "Разделение",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    description: "Мелодичная композиция о расставании.",
  },
  {
    id: 49,
    title: "Шелк",
    artist: "Ваня Дмитриенко",
    genre: "Альтернатива",
    mood: "Гладкость",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    description: "Нежная и элегантная композиция.",
  },
  {
    id: 50,
    title: "Настоящая",
    artist: "Ваня Дмитриенко",
    genre: "Альтернатива",
    mood: "Искренность",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Душевная песня о подлинных чувствах.",
  },
  {
    id: 51,
    title: "Пожары",
    artist: "XOLIDAYBOY",
    genre: "Альтернатива",
    mood: "Огонь",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80",
    description: "Энергичная и яркая композиция.",
  },
  {
    id: 52,
    title: "Зацепил",
    artist: "VERBEE",
    genre: "Рок",
    mood: "Влюбленность",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    description: "Легкая и приятная песня о симпатии.",
  },
  {
    id: 53,
    title: "Силуэт",
    artist: "Ваня Дмитриенко",
    genre: "Альтернатива",
    mood: "Тень",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    description: "Загадочная и атмосферная композиция.",
  },
  {
    id: 54,
    title: "Девочка с улыбкой на лице",
    artist: "Ярослав Сафронов",
    genre: "Рок",
    mood: "Позитив",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Жизнеутверждающая песня о радости.",
  },
  {
    id: 55,
    title: "Силуэт",
    artist: "Ярослав Сафронов",
    genre: "Рок",
    mood: "Образ",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80",
    description: "Мистическая и интригующая композиция.",
  },
  {
    id: 56,
    title: "Умирать я буду ночью",
    artist: "Ярослав Сафронов",
    genre: "Рок",
    mood: "Философия",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    description: "Глубокая и нелегкая песня о смысле жизни.",
  },
  {
    id: 57,
    title: "Осенний дождь",
    artist: "Ярослав Сафронов",
    genre: "Рок",
    mood: "Меланхолия",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    description: "Лиричная баллада об осени и грусти.",
  },
  {
    id: 58,
    title: "В Питере дождь",
    artist: "Ярослав Сафронов",
    genre: "Рок",
    mood: "Атмосфера",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Концептуальная песня о городе и погоде.",
  },
  {
    id: 59,
    title: "Солдат",
    artist: "5'nizza",
    genre: "Регги-рок",
    mood: "Мужество",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80",
    description: "Мощная песня о долге и чести.",
  },
  {
    id: 60,
    title: "Любовь в ресторане",
    artist: "Isko",
    genre: "Поп-рок",
    mood: "Романтика",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    description: "Нежная песня о встречах и чувствах.",
  },
  {
    id: 61,
    title: "Поезда",
    artist: "Женя Трофимов и Комната Культуры",
    genre: "Рок",
    mood: "Путь",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    description: "Лирическая композиция о движении и дороге.",
  },
  {
    id: 62,
    title: "Здравствуй, мама",
    artist: "Группа Мой Двор",
    genre: "Рок",
    mood: "Семья",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Трогательная песня об отношениях с матерью.",
  },
  {
    id: 63,
    title: "Давай за...",
    artist: "Любэ",
    genre: "Русский рок",
    mood: "Тосты",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80",
    description: "Веселая и застольная композиция.",
  },
  {
    id: 64,
    title: "Шантаж",
    artist: "Макс Корж",
    genre: "Рок",
    mood: "Драма",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    description: "Интенсивная песня о манипуляции.",
  },
  {
    id: 65,
    title: "Мотылек",
    artist: "Макс Корж",
    genre: "Рок",
    mood: "Нежность",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    description: "Мягкая и трогательная композиция.",
  },
  {
    id: 66,
    title: "Эндорфин",
    artist: "Макс Корж",
    genre: "Рок",
    mood: "Радость",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Позитивная и энергичная песня.",
  },
  {
    id: 67,
    title: "Пьяный Дождь",
    artist: "Макс Корж",
    genre: "Рок",
    mood: "Хаос",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80",
    description: "Бешеная композиция о разгуле эмоций.",
  },
  {
    id: 68,
    title: "Горы по Колено",
    artist: "Макс Корж",
    genre: "Рок",
    mood: "Мощь",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    description: "Величественная песня о преодолении.",
  },
  {
    id: 69,
    title: "Это наш путь",
    artist: "Макс Корж",
    genre: "Рок",
    mood: "Единство",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    description: "Вдохновляющая композиция о совместном пути.",
  },
  {
    id: 70,
    title: "Вона",
    artist: "SAMCHUK",
    genre: "Альтернатива",
    mood: "Она",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Лиричная песня о прекрасной даме.",
  },
  {
    id: 71,
    title: "Тихо плакала",
    artist: "YAKTAK и NICHKA",
    genre: "Рок",
    mood: "Печаль",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80",
    description: "Трогательная дуэтная композиция.",
  },
  {
    id: 72,
    title: "Хочеш",
    artist: "Після Дощу",
    genre: "Рок",
    mood: "Желание",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    description: "Страстная и энергичная песня.",
  },
  {
    id: 73,
    title: "Якби не ти",
    artist: "Максим Бородін",
    genre: "Рок",
    mood: "Любовь",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    description: "Нежная баллада о любимом человеке.",
  },
  {
    id: 74,
    title: "Детство",
    artist: "Rauf & Faik",
    genre: "Рэп-рок",
    mood: "Ностальгия",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Трогательная песня о воспоминаниях.",
  },
  {
    id: 75,
    title: "Уночі",
    artist: "YAKTAK",
    genre: "Рок",
    mood: "Ночь",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80",
    description: "Атмосферная композиция о ночных часах.",
  },
  {
    id: 76,
    title: "Нижча зростом",
    artist: "YAKTAK",
    genre: "Рок",
    mood: "Юмор",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    description: "Забавная песня с игривым настроением.",
  },
  {
    id: 77,
    title: "Не мовчи",
    artist: "YAKTAK",
    genre: "Рок",
    mood: "Призыв",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    description: "Мотивирующая композиция о голосе.",
  },
  {
    id: 78,
    title: "Дед Максим",
    artist: "Песни у костра",
    genre: "Фолк",
    mood: "История",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Рассказчивая песня о прожитой жизни.",
  },
  {
    id: 79,
    title: "Холодна весна",
    artist: "Golubenko и YAKTAK",
    genre: "Рок",
    mood: "Холод",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80",
    description: "Грустная дуэтная композиция о весне.",
  },
  {
    id: 80,
    title: "Люби меня люби",
    artist: "гречка",
    genre: "Поп-рок",
    mood: "Чувства",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    description: "Мелодичная песня о требовании любви.",
  },
  {
    id: 81,
    title: "Это не женщина",
    artist: "Те100стерон",
    genre: "Рок",
    mood: "Социальная критика",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    description: "Жесткая песня о гендерных стереотипах.",
  },
  {
    id: 82,
    title: "Это не девочка",
    artist: "Те100стерон",
    genre: "Рок",
    mood: "Провокация",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Еще одна провокационная композиция группы.",
  },
  {
    id: 83,
    title: "Из-за тебя",
    artist: "Akmal'",
    genre: "Рок",
    mood: "Вина",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80",
    description: "Эмоциональная песня об ответственности.",
  },
  {
    id: 84,
    title: "Режиссёр",
    artist: 'Группа "Градусы"',
    genre: "Рок",
    mood: "Управление",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    description: "Метафорическая песня о жизни и судьбе.",
  },
  {
    id: 85,
    title: "Седьмой лепесток",
    artist: "Антон Токарев",
    genre: "Рок",
    mood: "Волшебство",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    description: "Поэтичная композиция с мистическим подтекстом.",
  },
  {
    id: 86,
    title: "Вахтерам",
    artist: "БумБокс",
    genre: "Регги-рок",
    mood: "Благодарность",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Веселая песня-благодарность простым людям.",
  },
  {
    id: 87,
    title: "Батарейка",
    artist: "Жуки",
    genre: "Поп-рок",
    mood: "Энергия",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80",
    description: "Легкая и позитивная композиция.",
  },
  {
    id: 88,
    title: "Мокрые кроссы",
    artist: "Тима Белорусских",
    genre: "Рок",
    mood: "Молодость",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    description: "Трендовая песня о жизни молодёжи.",
  },
  {
    id: 89,
    title: "Венера-Юпитер",
    artist: "Ваня Дмитриенко",
    genre: "Альтернатива",
    mood: "Космос",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    description: "Космическая и философская композиция.",
  },
  {
    id: 90,
    title: "Ты так красива",
    artist: "Quest Pistols",
    genre: "Рок",
    mood: "Восхищение",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Простая и искренняя песня о красоте.",
  },
  {
    id: 91,
    title: "Медлячок",
    artist: "Баста",
    genre: "Рок",
    mood: "Танец",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80",
    description: "Романтичная композиция для танцев.",
  },
  {
    id: 92,
    title: "Камин",
    artist: "EMIN и JONY",
    genre: "Рок",
    mood: "Тепло",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    description: "Уютная дуэтная песня о тепле и уюте.",
  },
  {
    id: 93,
    title: "Услышит весь район",
    artist: "Dabro",
    genre: "Рок",
    mood: "Громкость",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    description: "Энергичная композиция со мощным звучанием.",
  },
  {
    id: 94,
    title: "Юность",
    artist: "Dabro",
    genre: "Рок",
    mood: "Молодость",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Ностальгичная песня о молодых годах.",
  },
  {
    id: 95,
    title: "Поболело и прошло",
    artist: "HENSY",
    genre: "Рок",
    mood: "Исцеление",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80",
    description: "Песня о преодолении боли и страдания.",
  },
  {
    id: 96,
    title: "Костёр",
    artist: "HENSY и Клава Кока",
    genre: "Рок",
    mood: "Огонь",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    description: "Теплая дуэтная композиция.",
  },
  {
    id: 97,
    title: "Полюбила дурака",
    artist: "Kambulat",
    genre: "Рок",
    mood: "Любовь",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    description: "Грустная песня о неразумной любви.",
  },
  {
    id: 98,
    title: "Она",
    artist: "Kambulat",
    genre: "Рок",
    mood: "Ностальгия",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Лиричная композиция о прошлой любви.",
  },
  {
    id: 99,
    title: "Привет",
    artist: "Kambulat",
    genre: "Рок",
    mood: "Встреча",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80",
    description: "Простая и душевная песня о встречах.",
  },
  {
    id: 100,
    title: "Карие глаза",
    artist: "Kambulat",
    genre: "Рок",
    mood: "Чувства",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    description: "Мелодичная баллада о красивых глазах.",
  },
  {
    id: 101,
    title: "Милашка",
    artist: "Эльдар Далгатов",
    genre: "Поп-рок",
    mood: "Нежность",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    description: "Ласковая песня о любимом человеке.",
  },
  {
    id: 102,
    title: "Бродяга",
    artist: "Эльбрус Джанмирзоев",
    genre: "Рок",
    mood: "Странничество",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Эпическая песня о свободе и дороге.",
  },
  {
    id: 103,
    title: "На моей луне",
    artist: "Мертвые дельфины",
    genre: "Рок",
    mood: "Фантазия",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80",
    description: "Сюрреалистичная и артистичная композиция.",
  },
  {
    id: 104,
    title: "Self Aware",
    artist: "Temper city",
    genre: "Электроник-рок",
    mood: "Осознание",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    description: "Современная композиция об осмысленности.",
  },
  {
    id: 105,
    title: "8-й колір",
    artist: "Мотор'ролла",
    genre: "Рок",
    mood: "Цвет",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    description: "Экспериментальная и артистичная песня.",
  },
  {
    id: 106,
    title: "Babydoll",
    artist: "Dominic Fike",
    genre: "Инди-поп",
    mood: "Нежность",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Современная и модная композиция.",
  },
  {
    id: 107,
    title: "Так не спокойна",
    artist: "Isko",
    genre: "Поп-рок",
    mood: "Волнение",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80",
    description: "Энергичная песня о беспокойстве и волнении.",
  },
  {
    id: 108,
    title: "Човен",
    artist: "Один в каное",
    genre: "Рок",
    mood: "Путешествие",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    description: "Приключенческая композиция о путешествии на лодке.",
  },
  {
    id: 109,
    title: "На руках",
    artist: "БРЕДИШЬ",
    genre: "Хип-хоп",
    mood: "Энергичная",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Песня про любовь с кучей энергии",
  },
  {
    id: 110,
    title: "LET THE WORLD BURN",
    artist: "Chris Grey",
    genre: "Alternative / Dark Pop",
    mood: "Мрачная",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description:
      "Темная и эмоциональная песня о внутренних переживаниях и разрушительных чувствах.",
  },
  {
    id: 111,
    title: "Люби меня долго",
    artist: "EXNLXDE и Ирина Дубцова",
    genre: "Поп",
    mood: "Романтичная",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Лиричный дуэт о желании сохранить любовь как можно дольше.",
  },
  {
    id: 112,
    title: "i crash, u crash",
    artist: "Lil Peep ft. Lil Tracy",
    genre: "Emo Rap",
    mood: "Грустная",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description:
      "Меланхоличная композиция о любви, боли и эмоциональной зависимости.",
  },
  {
    id: 113,
    title: "Дороги",
    artist: "ДДТ",
    genre: "Русский рок",
    mood: "Задумчивая",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Философская песня о жизненном пути, выборе и судьбе.",
  },
  {
    id: 114,
    title: "Немерено",
    artist: "лампабикт и Элли на маковом поле",
    genre: "Инди",
    mood: "Спокойная",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description:
      "Атмосферная композиция с мечтательным настроением и теплыми образами.",
  },
  {
    id: 115,
    title: "Прогулки по воде",
    artist: "Наутилус Помпилиус",
    genre: "Русский рок",
    mood: "Загадочная",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description:
      "Легендарная песня с глубокими библейскими аллюзиями и философским смыслом.",
  },
  {
    id: 116,
    title: "Выхода нет",
    artist: "Сплин",
    genre: "Русский рок",
    mood: "Грустная",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description:
      "Культовая композиция о безысходности и поиске внутреннего выхода.",
  },
  {
    id: 117,
    title: "Варвара",
    artist: "Би-2",
    genre: "Русский рок",
    mood: "Меланхоличная",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Эмоциональная песня о любви, расставании и сильных чувствах.",
  },
  {
    id: 118,
    title: "Пачка сигарет",
    artist: "Кино",
    genre: "Русский рок",
    mood: "Задумчивая",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description:
      "Одна из самых известных песен Виктора Цоя о поиске смысла и надежды.",
  },
  {
    id: 119,
    title: "Кукушка",
    artist: "Кино",
    genre: "Русский рок",
    mood: "Воодушевляющая",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description:
      "Сильная и символичная композиция о выборе, судьбе и силе духа.",
  },
  {
    id: 120,
    title: "Туман",
    artist: "Сектор Газа",
    genre: "Рок",
    mood: "Грустная",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Лирическая песня о воспоминаниях, потерях и надежде.",
  },
  {
    id: 121,
    title: "Я свободен",
    artist: "Кипелов",
    genre: "Хеви-метал",
    mood: "Воодушевляющая",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Мощный рок-гимн о свободе, силе воли и независимости.",
  },
  {
    id: 122,
    title: "Как на войне",
    artist: "Агата Кристи",
    genre: "Русский рок",
    mood: "Драматичная",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description:
      "Эмоциональная композиция о сложных отношениях и внутренних конфликтах.",
  },
  {
    id: 123,
    title: "Молодые ветра",
    artist: "7Б",
    genre: "Русский рок",
    mood: "Энергичная",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Драйвовая песня о молодости, свободе и стремлении вперед.",
  },
  {
    id: 124,
    title: "Мое сердце",
    artist: "Сплин",
    genre: "Русский рок",
    mood: "Романтичная",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Трогательная композиция о любви, надежде и чувствах.",
  },
  {
    id: 125,
    title: "Лесник",
    artist: "Король и Шут",
    genre: "Панк-рок",
    mood: "Энергичная",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description:
      "Знаменитая мистическая история с фирменной энергетикой группы.",
  },
  {
    id: 126,
    title: "Кукла колдуна",
    artist: "Король и Шут",
    genre: "Панк-рок",
    mood: "Энергичная",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description:
      "Культовая рок-баллада с мистическим сюжетом и запоминающимся припевом.",
  },
];

export function HomePage() {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<"title" | "artist" | "genre">("title");

  const filteredSongs = useMemo(() => {
    const loweredQuery = query.toLowerCase();
    const items = songs.filter((song) => {
      const matchesQuery =
        song.title.toLowerCase().includes(loweredQuery) ||
        song.artist.toLowerCase().includes(loweredQuery) ||
        song.genre.toLowerCase().includes(loweredQuery);
      return matchesQuery;
    });

    return [...items].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  }, [query, sortBy]);

  return (
    <div className={styles.pageShell}>
      <header className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>Репертуар для выступлений</p>
          <h1>Тихий шум</h1>
          <p className={styles.heroCopy}>
            Каталог песен для тех, кто хочет быстро выбрать и заказать номер из
            моего набора.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#catalog">
              Смотреть репертуар
            </a>
          </div>
        </div>
        <div className={styles.heroCard}>
          <div className={styles.heroCardGlow} />
          <p className={styles.cardLabel}>Сегодня в наборе</p>
          <h2>Дождь</h2>
          <p>Сдержанно, глубоко и очень по-настоящему.</p>
        </div>
      </header>

      <main id="catalog" className={styles.catalogSection}>
        <section className={styles.toolbar}>
          <div>
            <h3>Репертуар</h3>
            <p>Ищите по названию, исполнителю или стилю.</p>
          </div>
          <div className={styles.controls}>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Поиск по песням"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <label className={styles.selectWrap}>
              <span>Сортировка</span>
              <select
                value={sortBy}
                onChange={(event) =>
                  setSortBy(event.target.value as "title" | "artist" | "genre")
                }
              >
                <option value="title">По названию</option>
                <option value="artist">По исполнителю</option>
                <option value="genre">По стилю</option>
              </select>
            </label>
          </div>
        </section>

        <section className={styles.songGrid}>
          {filteredSongs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </section>
      </main>
    </div>
  );
}
