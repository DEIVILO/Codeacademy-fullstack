const greetings = [ 'Hello!',
'Hi there!',
'Hey!',
'Good morning!',
'Good afternoon!',
'Good evening!',
'Greetings!',
'Howdy!',
'Hola!',
'Bonjour!',
'Ciao!',
'Namaste!',
'Salaam!',
'Shalom!',
'Aloha!',
'Konnichiwa!',
'Guten Tag!',
'Privet!',
'Sawubona!',
'Salut!',
'Yo!',
'Hiya!',
'What\'s up?',
'How\'s it going?',
'Nice to see you!',
'How have you been?',
'Long time no see!',
'How\'s everything?',
'How are you doing?',
'Howdy-do!',
'Hey there, stranger!',
'Hey, buddy!',
'Greetings and salutations!',
'Hey, friend!',
'Pleased to meet you!',
'Hi, neighbor!',
'Hi, pal!',
'Hello, sunshine!',
'Hey, gorgeous!',
'Hello, beautiful!',
'Hello, handsome!',
'Hello, lovely!',
'Hello, world!',
'Welcome!',
'Warm greetings!',
'Hi, fellow human!',
'Hey, you!',
'Hi, everyone!',
'Hi, folks!',
'Hi, team!',
'Hello, friends and family!',
'Hey, party people!',
'Hiya, gamers!',
'Hi, tech enthusiasts!',
'Hello, adventurers!',
'Hey, travelers!',
'Hi, explorers!',
'Hey, foodies!',
'Hi, music lovers!',
'Hello, movie buffs!',
'Hey, bookworms!',
'Hi, art enthusiasts!',
'Hello, nature lovers!',
'Hey, animal lovers!',
'Hi, sports fans!',
'Hello, fitness enthusiasts!',
'Hey, fashionistas!',
'Hi, DIYers!',
'Hello, pet owners!',
'Hey, plant lovers!',
'Hi, environmentalists!']
const subjects = ['Mathematics',
'Science',
'History',
'Literature',
'Art',
'Music',
'Philosophy',
'Psychology',
'Sociology',
'Economics',
'Politics',
'Geography',
'Astronomy',
'Biology',
'Chemistry',
'Physics',
'Computer Science',
'Linguistics',
'Anthropology',
'Archaeology',
'Environmental Science',
'Ethics',
'Religion',
'Mythology',
'Architecture',
'Botany',
'Zoology',
'Paleontology',
'Geology',
'Oceanography',
'Meteorology',
'Cartography',
'Criminology',
'Demography',
'Education',
'Engineering',
'Health Sciences',
'Nutrition',
'Pharmacology']
const actions = ['running',
'jumping',
'swimming',
'climbing',
'flying',
'dancing',
'singing',
'reading',
'writing',
'drawing',
'painting',
'cooking',
'baking',
'coding',
'programming',
'building',
'designing',
'exploring',
'learning',
'teaching',
'helping',
'listening',
'speaking',
'communicating',
'collaborating',
'planning',
'organizing',
'researching',
'analyzing',
'solving',
'creating',
'inventing',
'innovating',
'inspiring',
'motivating',
'encouraging',
'supporting',
'mentoring',
'guiding',
'advising',
'assisting']


const generateMessage = () => {

//randomly selects a greeting, a subject and an action
    const randomGreeting = greetings[Math.floor(Math.random()*greetings.length)];
    const randomSubject = subjects[Math.floor(Math.random()*subjects.length)];
    const randomAction = actions[Math.floor(Math.random()*actions.length)];


//Makes the message
    const message = `${randomGreeting} Do you like ${randomSubject}? I am ${randomAction}.`

    return message
}


console.log(generateMessage())