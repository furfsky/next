import React from "react";

type SubtitleCollection = React.ReactElement[]
type QuoteProps = {
  author: string | React.ReactElement;
}

const Quote: React.FC<QuoteProps> = ({author, children}) => (
  <>
    {'"'}{children}{'"'}
    <br/>
    －{author}
  </>
)

// &apos; <- use instead of '

const quotesCollection = [
  <><Quote author="smolegit">light geometry can die in a hole.</Quote></>,
  <><Quote author="pcart">your toes will be pulled tonight</Quote></>,
  <><Quote author="𝐻𝑒𝓃𝓇𝓎 Æ𝓋𝑒𝓇𝒾𝑒𝓈, 𝟣𝟫𝟫𝟦">𝒥𝒶𝓂 𝒶 𝑀𝒶𝓃 𝑜𝒻 𝐹𝑜𝓇𝓉𝓊𝓃𝑒, 𝒶𝓃𝒹 𝒥 𝓂𝓊𝓈𝓉 𝓈𝑒𝑒𝓀 𝓂𝓎 𝐹𝑜𝓇𝓉𝓊𝓃𝑒</Quote></>,
  <><Quote author="a bald idiot">This pack is trash</Quote></>,
  <><Quote author="Sun Tzu">Pretend inferiority and encourage his arrogance.</Quote></>,
  <><Quote author="goog">i realised i haven&apos;t blinked in like half an hour and now blinking feels uncomfortable</Quote></>,
  <><Quote author="goog">i do love buying birth certificates from the black market</Quote></>,
  <><Quote author="Perpillow">who needs packs hq anyways</Quote></>,
  <><Quote author="Technoblade">
    <i>
      You can murder kids, because there&apos;s a point in murdering kids,
      <br/>
      But lying, There&apos;s no reason to lie, Only bad people lie. Killing Children is okay though.
    </i>
  </Quote></>,
  <><Quote author="Penguin">The furrier the better</Quote></>,
  <><Quote author="Shrek’s Mom"><i>Remember, life is what you make of it. Even if you are feeling down, you will get back up, Even though you did something bad, things will get better. Just because you came on your nice shoes in the bathroom at school, probably nobody will notice.</i></Quote></>,
  <><Quote author="Sun Tzu, Art of war">If you are trash go cry to Fortnite you loser</Quote></>,
];

const textCollection = [
  `Furfsky+ but its reborn`,
  `bottem text`,
  `The second era of Furfsky+`,
  `undefined`,
  `i wanted free vbucks :(`,
  `reload for another message`,
  `Yet another skyblock pack`,
  `please stop posting furry images.`,
  `boost the server for a cool role`,
  `5261796D6F6E6420486F6C74`,
  `46 75 72 66 53 6B 79 20 52 65 62 6F 72 6E`,
  `B99S5E17`,
  `Furfsky never dies`,
  `skyblock nerds apps are open btw`,
  `we're trying to get an ssl cert for https support please stop pestering us`,
  `Avocados 🥑 from Mexico 🇲🇽`,
  `the only cookies allowed on this website are booster cookies`,
  `did you do your experiments yet?`,
  `god i just hate reality`,
  `We have a lot of e-girls here`,
  `why does the discord server exist`,
  `I purchased a baby clown from the Russian terrorist black market.`,
  `I don’t support furry rights, but I do support this server`,
  `even more cursed than the original!`,
  `"For Furries by Furries"`,
  `Furfsky reborn - now with more shit, just worse.`,
  `Now with 56% more shitposting!`,
  `“Is this the United Airlines costumer service center?”`,
  `He stomped on his fruit loops and thus became a cereal killer.`,
  `why do they call it oven if you oven the cold food of out hot eat the food`,
  `Help im locked in a data center`,
  `what`,
  `Never half-ass two things. Whole-ass one thing.`,
  `Now works with Wynncraft!`,
  `i can smell your fear through the screen`,
  `we will steal your ip and sell it to china`,
  `we will steal your china and sell it to ip`,
  `i haven't left my house since furf posted on the forums!`,
  `i havent left my house, tyler refuses to let me out!`,
  `help, im locked in the basement`,
  `i havent left my house pls help me i'm hungry`,
  `fuck`,
  `Is this illegal?`,
  `furryegirl`,
  `furryeboy AR racing simulator`,
  `oh no`,
  `the pack that smiles back`,
  `I regret joining`,
  `this is the worst thing to happen to humanity`,
  `Gib coin pls I new`,
  `OMG YOUTUBER GIVE COIN!!!1!!!11111!!`,
  `gif bezos`,
  `Making websites is hard`,
  `The fur-suit is mandatory`,
  `you fool you blongus you absolute utter clampongus`,
  `ooga booga`,
  `If I drop soap on the ground, is the soap dirty, or am I utterly screwed?`,
  `doodoo woohoo`,
  `it do be like that`,
  `furf is into mice`,
]

export const subtitleCollection: SubtitleCollection = [
  ...quotesCollection,
  ...textCollection.map(text => <>{text}</>),
  <><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">join discord server here</a></>,
  <><h2>big text</h2></>,
  <>website by voxal<br/><small>(and for now, maintained by erymanthus)</small></>, // TODO update to include FoxScript uwu
  <><p contentEditable>you can edit this text</p></>,
  <>Think, Tyler!<br/><br/>You&apos;re asking for this site&apos;s quotes to consist entirely of FSR Discord inside jokes!<br/>Why do you think I started adding quotes from TV shows?</>,
  <><span style={ {fontSize: '5rem'} }>https://discord.com/channels/771187253937438762/772844452116824106/789595450306592798</span></>,
  <><span style={ {fontSize: '1rem'} }>Honestly, it&apos;s unfathomable how some gamers are so much better at gaming than us simpletons. Take Minecraft, for example. There are people who get mad at dying while completing the entire game. Their standards are so high that they would ragequit out of rage when they die after over an hour of challenging frame perfect and subpixel perfect inputs. Me, I can&apos;t even make a wood shovel. It&apos;s ridiculous how good those top notch gamers have gotten at this video game to even consider getting all of the achievements in one sitting. They must&apos;ve trained and practiced at this game for numerous hours each day, pouring every ounce of effort they have into perfecting their finger movements, touching the keys on their keyboard with precision unmatched by anything else. Such dedication going unnoticed in the general public is unfair, and I feel like those gamers deserve all the recognition they can get</span></>,
  <><span style={ {fontSize: '1rem'} }>moulberry bush man is swag man with big pp and huge brain he is like the god of the gods and he has gaming skin and stuff he plays with 1000iq and is like omg moulberry moment i sometimes wonder what is a moulberry is it berry or is a it a moul or maybe its a moulberry i guess we will never know and like moul is like omg MOUL its very cool and swag he has like huge balls and stuff too and he&apos;s like super funny and shit too he also has cool australian accent like my life without moulberry wud be incomplete i need moulberry in my life he&apos;s god he&apos;s life he&apos;s moulberry but he&apos;s not a blueberry if he was a blueberry it wouldve been cooler since like blueberries are cooler but it is what it is he has 46203 simps already and that number grows everyday and i wonder if one day he will have 100 thousands simps i mean knowning moulberry he probably will but then again ppl are dumb and they dont understand the power of the berry and havent joined the server like why are you why do u you even live i question this all day long and sometimes i think that i might be too obsessed with moulberry but then i realize you can never be too upset by the berry himself it gives me the will to live moulberry is the reason im still here the day moulberry leaves my life i will commit die i can not live without the moulberry and his big pp.</span></>,
]

// done up to line 138 https://github.com/furfsky/furfsky.github.io/blob/master/scripts/data.js
