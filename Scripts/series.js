const series = [
    {
        name: "Breaking Bad",
        image: "../Pics/BreakingBad.jpg",
        description: "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student to secure his family's future.",
        genres: ["Crime", "Drama", "Thriller"],
        rating: 9.5,
    },
    {
        name: "Band Of Brothers",
        image: "../Pics/BandOfBrothers.jpg",
        description: "The story of Easy Company of the U.S. Army 101st Airborne Division and their mission in World War II Europe, from Operation Overlord to V-J Day.",
        genres: ["Action", "Drama", "History"],
        rating: 9.4,
    },
    {
        name: "Chernobyl",
        image: "../Pics/Chernobyl.jpg",
        description: "In April 1986, the city of Chernobyl in the Soviet Union suffers one of the worst nuclear disasters in the history of mankind. Consequently, many heroes put their lives on the line in the following days, weeks and months.",
        genres: ["Thriller", "Drama", "History"],
        rating: 9.3,
    },
    {
        name: "Avatar: Last Airbender",
        image: "../Pics/AvatarLastAirbender.jpg",
        description: "In a war-torn world of elemental powers, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world.",
        genres: ["Action", "Animation", "Adventure"],
        rating: 9.3,
    },
    {
        name: "The Sopranos",
        image: "../Pics/Sopranos.jpg",
        description: "New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling.",
        genres: ["Crime", "Drama"],
        rating: 9.2,
    },
    {
        name: "Game of Thrones",
        image: "../Pics/got.jpg",
        description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
        genres: ["Action", "Drama", "Adventure"],
        rating: 9.2,
    },
    {
        name: "Sherlock",
        image: "../Pics/Sherlock.jpg",
        description: "The quirky spin on Conan Doyle's iconic sleuth pitches him as a 'high-functioning sociopath' in modern-day London. Assisting him in his investigations: Afghanistan War vet John Watson, who's introduced to Holmes by a mutual acquaintance.",
        genres: ["Crime", "Drama", "Mystery"],
        rating: 9.1,
    },
    {
        name: "The Office",
        image: "../Pics/Office.jpg",
        description: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, tedium and romance.",
        genres: ["Comedy"],
        rating: 9.4,
    },
    {
        name: "Seinfield",
        image: "../Pics/Seinfield.jpg",
        description: "The continuing misadventures of neurotic New York City stand-up comedian Jerry Seinfeld and his equally neurotic New York City friends.",
        genres: ["Comedy"],
        rating: 8.9,
    },
    {
        name: "Taskmaster",
        image: "../Pics/Taskmaster.jpg",
        description: "Five comedians are set tasks challenging their creativity and wit. The tasks are supervised by Alex Horne but the Taskmaster, Greg Davies, always has the final word.",
        genres: ["Comedy", "Game-Show"],
        rating: 9.0,
    },
    {
        name: "Friends",
        image: "../Pics/Friends.jpg",
        description: "Follows the personal and professional lives of six twenty to thirty year-old friends living in the Manhattan borough of New York City.",
        genres: ["Comedy", "Romance"],
        rating: 8.9,
    },
    {
        name: "BoJack Horseman",
        image: "../Pics/BojackHorsman.jpg",
        description: "BoJack Horseman was the star of the hit television show 'Horsin' Around' in the '80s and '90s, but now he's washed up, living in Hollywood, complaining about everything, and wearing colorful sweaters.",
        genres: ["Animation", "Drama", "Comedy"],
        rating: 8.8,
    },
    {
        name: "Narcos",
        image: "../Pics/Narcos.jpg",
        description: "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.",
        genres: ["Biography", "Crime", "Drama"],
        rating: 8.7
    },
    {
        name: "Peaky Blinders",
        image: "../Pics/PeakyBlinders.jpg",
        description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
        genres: ["Crime", "Drama"],
        rating: 8.7
    },
    {
        name: "Dark",
        image: "../Pics/Dark.jpg",
        description: "A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.",
        genres: ["Crime", "Drama", "Mystery"],
        rating: 8.7
    },
    {
        name: "The Last of Us",
        image: "../Pics/LastofUs.jpg",
        description: "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
        genres: ["Action", "Adventure", "Drama"],
        rating: 8.7
    },
    {
        name: "Stranger Things",
        image: "../Pics/StrangerThings.jpg",
        description: "In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.",
        genres: ["Drama", "Fantasy", "Horror"],
        rating: 8.7
    },
    {
        name: "Top Gear",
        image: "../Pics/TopGear.jpg",
        description: "The hosts talk about everything car-related. From new cars to how they're fueled, this show has it all.",
        genres: ["Adventure", "Sport", "Talk-Show"],
        rating: 8.7
    },
    {
        name: "The Crown",
        image: "../Pics/Crown.jpg",
        description: "Follows the political rivalries and romances of Queen Elizabeth II's reign and the events that shaped Britain for the second half of the 20th century.",
        genres: ["Biography", "Drama", "History"],
        rating: 8.6
    },
    {
        name: "Mindhunter",
        image: "../Pics/Mindhunter.jpg",
        description: "In the late 1970s, two FBI agents broaden the realm of criminal science by investigating the psychology behind murder and end up getting too close to real-life monsters.",
        genres: ["Crime", "Drama", "Mystery"],
        rating: 8.6
    },
    {
        name: "What We Do in the Shadows",
        image: "../Pics/WhatWeDoInShadows.jpg",
        description: "A look into the nightly lives of four vampires who have lived together on Staten Island for over a century.",
        genres: ["Comedy", "Fantasy", "Horror"],
        rating: 8.6
    },
    {
        name: "Haunting Of Hill House",
        image: "../Pics/HauntingofHillHouse.jpg",
        description: "Flashing between past and present, a fractured family confronts haunting memories of their old home and the terrifying events that drove them from it.",
        genres: ["Drama", "Horror", "Mystery"],
        rating: 8.5
    },
    {
        name: "Gilmore Girls",
        image: "../Pics/GilmoreGirls.jpg",
        description: "A dramedy centering around the relationship between a thirtysomething single mother and her teen daughter living in Stars Hollow, Connecticut.",
        genres: ["Coming-Of-Age", "Comedy", "Drama"],
        rating: 8.2
    },
    {
        name: "The Witcher",
        image: "../Pics/Witcher.jpg",
        description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
        genres: ["Adventure", "Drama", "Fantasy"],
        rating: 8.0
    },
    {
        name: "From",
        image: "../Pics/From.jpg",
        description: "Unravel the mystery of a city in middle U.S.A. that imprisons everyone who enters. As the residents struggle to maintain a sense of normality and seek a way out, they must also survive the threats of the surrounding forest.",
        genres: ["Drama", "Horror", "Mystery"],
        rating: 7.8
    },
    {
        name: "You",
        image: "../Pics/You.jpg",
        description: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        genres: ["Crime", "Drama", "Thriller"],
        rating: 7.7
    },
    {
        name: "Bridgerton",
        image: "../Pics/Bridgerton.jpg",
        description: "The eight close-knit siblings of the Bridgerton family look for love and happiness in London high society.",
        genres: ["Drama", "Romance"],
        rating: 7.4
    }
];
