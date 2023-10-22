import p1 from './p1.jpeg'
import p2 from './p2.jpeg'
import p3 from './p3.jpeg'
import p8 from './p8.jpeg'
import p7 from './p7.jpeg'
import p6 from './p6.jpeg'
import p5 from './p5.jpeg'
import p9 from './p9.jpeg'
import p10 from './p10.jpeg'
import { Link } from "react-router-dom"

const HomePosts = () => {
  return (
    <>
    <div className="w-full flex mt-8 space-x-4 card-container">
    {/* left*/}
    <div className="w-[35%] h-[200px] flex justify-center items-center">
    <img src={p1} alt="Pokémon" className="h-full w-full object-cover"></img>
    </div>
    {/* right*/}
    <div className="flex flex-col w-[65%]">
      <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
      Pikachu
       </h1>
    <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4"></div>
    </div>
    <p className="text-sm md:text-lg">Pokémon[a] is a Japanese media franchise consisting of video games, animated series and films, a trading card game, and other related media. The franchise takes place in a shared universe in which humans co-exist with creatures known as Pokémon, a large variety of species endowed with special powers.</p>
    <h1 className="text-sm md:text-lg font-bold"><Link to="https://en.wikipedia.org/wiki/Pikachu">Load More</Link></h1>
    
    </div>

    {/* --------------------------------------------------------------------- */}
    <div className="w-full flex mt-8 space-x-4 card-container">
    {/* left*/}
    <div className="w-[35%] h-[200px] flex justify-center items-center">
    <img src={p2} alt="Ash Ketchum (サトシ, Satoshi)" className="h-full w-full object-cover"></img>
    </div>
    {/* right*/}
    <div className="flex flex-col w-[65%]">
      <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
      Ash Ketchum (サトシ, Satoshi)     
       </h1>
    <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4"></div>
    </div>
    <p className="text-sm md:text-lg">Ash Ketchum, known as Satoshi (サトシ) in Japan, is a fictional character in the Pokémon franchise owned by Nintendo, Game Freak, and Creatures. He is the protagonist of the Pokémon anime for the first 25 seasons and certain manga series as well as on various merchandise related to the franchise.</p>
    <h1 className="text-sm md:text-lg font-bold"><Link to="https://en.wikipedia.org/wiki/Ash_Ketchum">Load More</Link></h1>
    </div>

    {/* --------------------------------------------------------------------- */}

    <div className="w-full flex mt-8 space-x-4 card-container">
    {/* left*/}
    <div className="w-[35%] h-[200px] flex justify-center items-center">
    <img src={p3} alt="Misty (カスミ, Kasumi)" className="h-full w-full object-cover"></img>
    </div>
    {/* right*/}
    <div className="flex flex-col w-[65%]">
      <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
      Misty (カスミ, Kasumi)
       </h1>
    <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4"></div>
    </div>
    <p className="text-sm md:text-lg">Misty, known as Kasumi (カスミ) in Japan, is a fictional character in the Pokémon franchise owned by Nintendo and created by Satoshi Tajiri. She has appeared as a Gym Leader in the Pokémon video games Pokémon Red and Blue, Pokémon Gold and Silver, and their respective remakes</p>
    <h1 className="text-sm md:text-lg font-bold"><Link to="https://en.wikipedia.org/wiki/Misty_(Pok%C3%A9mon)">Load More</Link></h1>
    </div>

   

    {/* --------------------------------------------------------------------- */}

    <div className="w-full flex mt-8 space-x-4 card-container">
    {/* left*/}
    <div className="w-[35%] h-[200px] flex justify-center items-center">
    <img src={p7} alt="Tracey Sketchit (ケンジ, Kenji)" className="h-full w-full object-cover"></img>
    </div>
    {/* right*/}
    <div className="flex flex-col w-[65%]">
      <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
      Tracey Sketchit (ケンジ, Kenji)    
       </h1>
    <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4"></div>
    </div>
    <p className="text-sm md:text-lg">One of Ash's traveling friends in Orange Islands, Tracey Sketchit is a Pokémon watcher, and assistant to Professor Oak in Pallet Town.Tracey Sketchit is a Pokémon watcher who takes Brock's place during the time he spends with Professor Ivy. After Ash's Orange League adventures, he works as Professor Oak's assistant. </p>
    <h1 className="text-sm md:text-lg font-bold"><Link to="https://en.wikipedia.org/wiki/Tracey_Sketchit_(%E3%82%B1%E3%83%B3%E3%82%B8,_Kenji)">Load More</Link></h1>
    </div>

 {/* --------------------------------------------------------------------- */}

    <div className="w-full flex mt-8 space-x-4 card-container">
    {/* left*/}
    <div className="w-[35%] h-[200px] flex justify-center items-center">
    <img src={p8} alt="May (ハルカ, Haruka)" className="h-full w-full object-cover"></img>
    </div>
    {/* right*/}
    <div className="flex flex-col w-[65%]">
      <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
      May (ハルカ, Haruka)    
       </h1>
    <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4"></div>
    </div>
    <p className="text-sm md:text-lg">May is the daughter of the Petalburg City Gym Leader, Norman and the older sister of Max. She meets Ash in Advanced Generation and starts traveling with him after obtaining her first Pokémon, Torchic. Initially, May did not like Pokémon as she only wanted to start her journey for the adventure and freedom that came with traveling with a Pokémon.</p>
    <h1 className="text-sm md:text-lg font-bold"><Link to="https://en.wikipedia.org/wiki/May_(%E3%83%8F%E3%83%AB%E3%82%AB,_Haruka)">Load More</Link></h1>
    </div>

    {/* --------------------------------------------------------------------- */}

    <div className="w-full flex mt-8 space-x-4 card-container">
    {/* left*/}
    <div className="w-[35%] h-[200px] flex justify-center items-center">
    <img src={p6} alt="Dawn (ヒカリ, Hikari)" className="h-full w-full object-cover"></img>
    </div>
    {/* right*/}
    <div className="flex flex-col w-[65%]">
      <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
      Dawn (ヒカリ, Hikari)     
       </h1>
    <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4"></div>
    </div>
    <p className="text-sm md:text-lg">Dawn is a Pokémon Coordinator who travels with Ash and Brock in Sinnoh. Following in her mother's footsteps as a Coordinator, she chooses Piplup, who she had already befriended at an earlier point, and sets out with the goal of becoming Top Coordinator. As she participates and win in more Contests, Dawn gradually becomes more confident in contest.</p>
    <h1 className="text-sm md:text-lg font-bold"><Link to="https://en.wikipedia.org/wiki/Dawn%20(%E3%83%92%E3%82%AB%E3%83%AA,%20Hikari)">Load More</Link></h1>
    </div>

    {/* --------------------------------------------------------------------- */}

    <div className="w-full flex mt-8 space-x-4 card-container">
    {/* left*/}
    <div className="w-[35%] h-[200px] flex justify-center items-center">
    <img src={p5} alt="Max (マサト, Masato)" className="h-full w-full object-cover"></img>
    </div>
    {/* right*/}
    <div className="flex flex-col w-[65%]">
      <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
      Max (マサト, Masato)    
       </h1>
    <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4"></div>
    </div>
    <p className="text-sm md:text-lg">Max is the 7-year-old son of the Petalburg City Gym Leader, Norman and the younger brother of May. He joins the group of Ash, May and Brock. Max is a budding Pokémon trainer but is too young to receive a Pokémon.Max (Japanese: マサト Masato) is a young boy from the Pokémon anime, and a former traveling companion of Ash. </p>
    <h1 className="text-sm md:text-lg font-bold"><Link to="https://en.wikipedia.org/wiki/Max%20(%E3%83%9E%E3%82%B5%E3%83%88,%20Masato)">Load More</Link></h1>
    </div>
     {/* --------------------------------------------------------------------- */}

     <div className="w-full flex mt-8 space-x-4 card-container">
    {/* left*/}
    <div className="w-[35%] h-[200px] flex justify-center items-center">
    <img src={p9} alt="Max (マサト, Masato)" className="h-full w-full object-cover"></img>
    </div>
    {/* right*/}
    <div className="flex flex-col w-[65%]">
      <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
      Luana (ルリコ, Ruriko)   
       </h1>
    <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4"></div>
    </div>
    <p className="text-sm md:text-lg">Luana is the Gym Leader of the Kumquat Island Gym from the Orange Islands. She mistook Ash to be her son, as Travis went on his own journey, dressed like Ash and having a Pikachu as well. After Team Rocket were defeated, Luana let him, Misty and Tracey into her hotel, as they saw the luxury.</p>
    <h1 className="text-sm md:text-lg font-bold"><Link to="https://en.wikipedia.org/wiki/Max%20(%E3%83%9E%E3%82%B5%E3%83%88,%20Masato)">Load More</Link></h1>
    </div>
    
     {/* --------------------------------------------------------------------- */}

     <div className="w-full flex mt-8 space-x-4 card-container">
    {/* left*/}
    <div className="w-[35%] h-[200px] flex justify-center items-center">
    <img src={p10} alt="Max (マサト, Masato)" className="h-full w-full object-cover"></img>
    </div>
    {/* right*/}
    <div className="flex flex-col w-[65%]">
      <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
      Koga (キョウ, Kyō) 
       </h1>
    <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4"></div>
    </div>
    <p className="text-sm md:text-lg">Koga is the Poison-type Gym Leader from Fuchsia City and a ninja. Unlike in the games, he does not have a daughter named Janine. Rather, he has a younger sister and student named Aya.</p>
    <h1 className="text-sm md:text-lg font-bold"><Link to="https://en.wikipedia.org/wiki/Max%20(%E3%83%9E%E3%82%B5%E3%83%88,%20Masato)">Load More</Link></h1>
    </div>
    
    </>
  )
}

export default HomePosts