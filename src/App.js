import { useState, useEffect } from "react";

function App() {
  function extractUsernameFromUrl(url) {
    const regex = /https:\/\/www\.instagram\.com\/([^\/]+)/;

    const match = url.match(regex);

    return match ? match[1] : null;
  }

  const quotes = [
    {
      text: "Tears come from the heart and not from the brain.",
      author: "Leonardo da Vinci",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "Every man has his secret sorrows which the world knows not; and often times we call a man cold when he is only sad.",
      author: "Henry Wadsworth Longfellow",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "It's amazing how someone can break your heart and you can still love them with all the little pieces.",
      author: "Ella Harper",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "You cannot protect yourself from sadness without protecting yourself from happiness.",
      author: "Jonathan Safran Foer",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "Heavy hearts, like heavy clouds in the sky, are best relieved by the letting of a little water.",
      author: "Christopher Morley",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "Sadness flies away on the wings of time.",
      author: "Jean de La Fontaine",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "The word 'happy' would lose its meaning if it were not balanced by sadness.",
      author: "Carl Jung",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "The walls we build around us to keep sadness out also keep out the joy.",
      author: "Jim Rohn",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "Don't cry because it's over, smile because it happened.",
      author: "Dr. Seuss",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "Sadness is but a wall between two gardens.",
      author: "Khalil Gibran",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "Sadness is a place, sometimes people live there for a while, sometimes they visit, but you can't live there forever.",
      author: "Dean Koontz",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "For all sad words of tongue and pen, the saddest are these, 'It might have been.'",
      author: "John Greenleaf Whittier",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "Nobody understands another's sorrow, and nobody another's joy.",
      author: "Franz Schubert",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "The walls we build around us to keep out the sadness also keep out the joy.",
      author: "Jim Rohn",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "Every human walks around with a certain kind of sadness. They may not wear it on their sleeves, but it's there if you look deep.",
      author: "Taraji P. Henson",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "The good times of today are the sad thoughts of tomorrow.",
      author: "Bob Marley",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "Behind every sweet smile, there is a bitter sadness that no one can ever see and feel.",
      author: "Tupac Shakur",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "Life is a long preparation for something that never happens.",
      author: "W.B. Yeats",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "The saddest thing in life is wasted talent.",
      author: "A Bronx Tale",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "The tragedy of life is not so much what men suffer, but rather what they miss.",
      author: "Thomas Carlyle",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "There is no greater sorrow than to recall in misery the time when we were happy.",
      author: "Dante Alighieri",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "It hurts to leave a light on for nobody.",
      author: "Graham Foust",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "What brings us to tears, will lead us to grace. Our pain is never wasted.",
      author: "Bob Goff",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "There is a time for departure even when there's no certain place to go.",
      author: "Tennessee Williams",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "Our sweetest songs are those that tell of saddest thought.",
      author: "Percy Bysshe Shelley",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "Life is full of misery, loneliness, and suffering - and it's all over much too soon.",
      author: "Woody Allen",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "You don't know who is important to you until you actually lose them.",
      author: "Mahatma Gandhi",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "It's hard to forget someone who gave you so much to remember.",
      author: "Unknown",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "Sadness is but a wall between two gardens.",
      author: "Khalil Gibran",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "The sorrow we feel when we lose a loved one is the price we pay to have had them in our lives.",
      author: "Rob Liano",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "Sadness is almost never anything but a form of fatigue.",
      author: "Andre Gide",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "The soul would have no rainbow had the eyes no tears.",
      author: "John Vance Cheney",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "You meet everyone twice in this life, when they come and when they go.",
      author: "C.C. Aurel",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "Sadness usually results from one of the following causes either when a man does not succeed, or is ashamed of his success.",
      author: "Seneca",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "Sadness gives depth. Happiness gives height. Sadness gives roots. Happiness gives branches. Happiness is like a tree going into the sky, and sadness is like the roots going down into the womb of the earth.",
      author: "Osho",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "Noble deeds and hot baths are the best cures for depression.",
      author: "Dodie Smith",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "Every human walks around with a certain kind of sadness. They may not wear it on their sleeves, but it's there if you look deep.",
      author: "Taraji P. Henson",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "Sad things happen. They do. But we don't need to live sad forever.",
      author: "Mattie Stepanek",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "Sadness flies away on the wings of time.",
      author: "Jean de La Fontaine",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "You can't keep the birds of sadness from flying over your head, but you can keep them from nesting in your hair.",
      author: "Sharon Creech",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "Sometimes we get sad about things and we don't like to tell other people that we are sad about them. We like to keep it a secret. Or sometimes, we are sad but we really don't know why we are sad, so we say we aren't sad but we really are.",
      author: "Mark Haddon",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "When you are happy you enjoy the music, but when you are sad you understand the lyrics.",
      author: "Frank Ocean",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "Sadness is almost never anything but a form of fatigue.",
      author: "Andre Gide",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "Life is made of so many partings welded together.",
      author: "Charles Dickens",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "He who is not just is severe, he who is not wise is sad.",
      author: "Voltaire",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "For all sad words of tongue and pen, the saddest are these, 'It might have been.'",
      author: "John Greenleaf Whittier",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "He who is not just is severe, he who is not wise is sad.",
      author: "Voltaire",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "The tragedy of life is not so much what men suffer, but rather what they miss.",
      author: "Thomas Carlyle",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "There is no greater sorrow than to recall in misery the time when we were happy.",
      author: "Dante Alighieri",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "It hurts to leave a light on for nobody.",
      author: "Graham Foust",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "What brings us to tears, will lead us to grace. Our pain is never wasted.",
      author: "Bob Goff",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "There is a time for departure even when there's no certain place to go.",
      author: "Tennessee Williams",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "Our sweetest songs are those that tell of saddest thought.",
      author: "Percy Bysshe Shelley",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "Life is full of misery, loneliness, and suffering - and it's all over much too soon.",
      author: "Woody Allen",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "You don't know who is important to you until you actually lose them.",
      author: "Mahatma Gandhi",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "It's hard to forget someone who gave you so much to remember.",
      author: "Unknown",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "Sadness is but a wall between two gardens.",
      author: "Khalil Gibran",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "The sorrow we feel when we lose a loved one is the price we pay to have had them in our lives.",
      author: "Rob Liano",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "Sadness is almost never anything but a form of fatigue.",
      author: "Andre Gide",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "The soul would have no rainbow had the eyes no tears.",
      author: "John Vance Cheney",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "You meet everyone twice in this life, when they come and when they go.",
      author: "C.C. Aurel",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "Sadness usually results from one of the following causes either when a man does not succeed, or is ashamed of his success.",
      author: "Seneca",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "Sadness gives depth. Happiness gives height. Sadness gives roots. Happiness gives branches. Happiness is like a tree going into the sky, and sadness is like the roots going down into the womb of the earth.",
      author: "Osho",
      url: "https://www.instagram.com/wizzpradeep",
    },
    {
      text: "Noble deeds and hot baths are the best cures for depression.",
      author: "Dodie Smith",
      url: "https://www.instagram.com/wizzpradeep",
    },
  ];

  function moreQuote(text, url, author) {
    const new_quote = {
      text: text,
      url: url,
      author: author,
    };
    quotes.push(new_quote);
  }

  moreQuote(
    "hello world this is pradeep kunwar i am",
    "https://www.instagram.com/wizzpradeep",
    "Pradeep"
  );

  const [qoute, setQuote] = useState(quotes[0].text);
  const [author, setAuthor] = useState(quotes[0].author);
  const [insta, setInsta] = useState(quotes[0].url);

  function GenQuote() {
    let ran = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[ran].text);
    setAuthor(quotes[ran].author);
    setInsta(quotes[ran].url);

    console.log(quotes);
  }

  return (
    <>
      <div className="w-full h-screen bg-gray-900 fixed">
        <h1 className=" capitalize lg:text-5xl   text-3xl font-extrabold text-white p-4 w-fit mt-10 mx-auto rounded ">
          generate quote
        </h1>

        <div className=" lg:h-1/3 h-1/3 relative bg-gray-500 lg:p-10  p-2  pt-12 lg:w-4/5 text-center mt-10 mx-auto rounded shadow-lg">
          <p className="lg:text-2xl text-xl font-bold">{qoute}</p>

          <a
            href={insta}
            className="absolute  bottom-4 end-4 w-fit font-extrabold text-blue-900"
          >
            -{author}
          </a>
        </div>

        <button
          onClick={GenQuote}
          className="text-white bg-blue-900 font-bold p-2 w-28 rounded shadow-lg mx-auto block mt-5 "
        >
          New
        </button>
      </div>
    </>
  );
}

export default App;