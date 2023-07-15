//Text Adventure
const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');

function startGame() {
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)){
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option){
  return true;
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  showTextNode(nextTextNodeId)
}
//Text Adventure Variables
const textNodes = [
  {
    id: 1,
    text: 'Welcome to If Adventure',
    options:[
      {
        text: 'Continue',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'You are walking along a path in a forest when you come to a fork in the road. There is a sign, but it is too worn to read. The path to the right looks well worn. The path to the left is overgrown. Which way do you go?',
    options:[
      {
        text: 'Right',
        nextText: 3
      },
      {
        text: 'Left',
        nextText: 15
      }
    ]
  },
  {
    id: 3,
    text: 'After walking along the well-worn path for an hour, you come to a city. The gate has two guards stationed there. You will have to pay to enter the city, but the fee will take half of the money you have. However, you could try to sneak into the city.',
    options:[
      {
        text: 'Pay',
        nextText: 4
      },
      {
        text: 'Sneak',
        nextText: 11
      }
    ]
  },
  {
    id: 4,
    text: 'After paying the fee, you go exploring in the city. You find an inn, a restaurant, and a bazaar. Which do you go into?',
    options:[
      {
        text: 'Inn',
        nextText: 5
      },
      {
        text: 'Restaurant',
        nextText: 6
      },
      {
        text: 'Bazaar',
        nextText: 7
      }
    ]
  },
  {
    id: 5,
    text: 'While you are there you meet your hero. You were able to talk to them for a while and at the end they gave you their autograph.',
    options:[
      {
        text: 'Play Again',
        nextText: 2
      }
    ]
  },
  {
    id: 6,
    text: "The meal you order at the restaurant was the best food that you've ever had.",
    options:[
      {
        text: 'Play Again',
        nextText: 2
      }
    ]
  },
  {
    id: 7,
    text: 'Inside the bazaar, there are three items being advertised as magical, a cloak, a mirror, and a blank book. You only have enough money to buy one. Which on do you buy?',
    options:[
      {
        text: 'Cloak',
        nextText: 8
      },
      {
        text: 'Mirror',
        nextText: 9
      },
      {
        text: 'Book',
        nextText: 10
      }
    ]
  },
  {
    id: 8,
    text: 'The magic the cloak silences your footsteps and allows you to merge with the shadows.',
    options:[
      {
        text: 'Play Again',
        nextText: 2
      }
    ]
  },
  {
    id: 9,
    text: 'The mirror has the ability to show you the future, but it can only be used once a day.',
    options:[
      {
        text: 'Play Again',
        nextText: 2
      }
    ]
  },
  {
    id: 10,
    text: 'The book will answer any question you write in it.',
    options:[
      {
        text: 'Play Again',
        nextText: 2
      }
    ]
  },
  {
    id: 11,
    text: 'The guards catch you trying to sneak in, and you are sent to jail. While in prison you meet another prisoner. He offers you the choice of one Item to help you escape, a wire, a shovel, or a knife. Which do you choose?',
    options:[
      {
        text: 'Wire',
        nextText: 12
      },
      {
        text: 'Shovel',
        nextText: 13
      },
      {
        text: 'Knife',
        nextText: 14
      }
    ]
  },
  {
    id: 12,
    text: 'You were able to use the wire to pick the lock and you manage to escape.',
    options:[
      {
        text: 'Play Again',
        nextText: 2
      }
    ]
  },
  {
    id: 13,
    text: 'You use the shovel to tunnel your way out and into the forest.',
    options:[
      {
        text: 'Play Again',
        nextText: 2
      }
    ]
  },
  {
    id: 14,
    text: 'You use the knife to fight the guards. You lose the fight and are sentenced to ten years in prison.',
    options:[
      {
        text: 'Play Again',
        nextText: 2
      }
    ]
  },
  {
    id: 15,
    text: "After pushing your way through, a swamp blocks your path. Looking back, you can't see where you came from. Then you notice a boat and a house off to one side. You could simply take the boat across the swamp or you could ask for permission.",
    options:[
      {
        text: 'Ask',
        nextText: 20
      },
      {
        text: 'Take',
        nextText: 16
      }
    ]
  },
  {
    id: 16,
    text: 'You make your way across the swamp. Once you reach the far side you notice three things in the boat, a map, a potion, and a rope. Which one will you take?',
    options:[
      {
        text: 'Map',
        nextText: 17
      },
      {
        text: 'Potion',
        nextText: 18
      },
      {
        text: 'Rope',
        nextText: 19
      }
    ]
  },
  {
    id: 17,
    text: "You open the map and find that it leads to a legendary pirate's treasure.",
    options:[
      {
        text: 'Play Again',
        nextText: 2
      }
    ]
  },
  {
    id: 18,
    text: 'You drink the potion, and it gives you the ability to fly.',
    options:[
      {
        text: 'Play Again',
        nextText: 2
      }
    ]
  },
  {
    id: 19,
    text: "The rope comes to life as soon as you touch it and ties you up. You can't escape.",
    options:[
      {
        text: 'Play Again',
        nextText: 2
      }
    ]
  },
  {
    id: 20,
    text: 'A witch lives in the house and says you can use the boat if you help her with a chore first. You can help make dinner, help in the garden, or help make a potion. Which do you choose?',
    options:[
      {
        text: 'Dinner',
        nextText: 21
      },
      {
        text: 'Garden',
        nextText: 22
      },
      {
        text: 'Potion',
        nextText: 23
      }
    ]
  },
  {
    id: 21,
    text: 'Turns out that you are dinner. You have been eaten.',
    options:[
      {
        text: 'Play Again',
        nextText: 2
      }
    ]
  },
  {
    id: 22,
    text: 'While helping in the garden, you find a secret passage that leads you to a beautiful underground city.',
    options:[
      {
        text: 'Play Again',
        nextText: 2
      }
    ]
  },
  {
    id: 23,
    text: 'You do such a good job that the witch makes you her apprentice.',
    options:[
      {
        text: 'Play Again',
        nextText: 2
      }
    ]
  }
]

startGame()