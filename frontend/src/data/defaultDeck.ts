import type { Deck } from '../types';

export const defaultDeck: Deck = {
  id: 'theories-practices-deck',
  name: 'Theories & Practices (Urbanism)',
  description:
    'A balanced 40-question deck covering Wright, Le Corbusier, New Capitals, and the City Beautiful Movement.',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  cards: [
    // ----------------------------
    // The Mile High Tower (8)
    // ----------------------------
    {
      id: '1',
      type: 'mcq',
      question: 'The Illinois (Mile-High Tower) was proposed to reach approximately how tall?',
      choices: ['828 m', '1,610 m', '632 m', '508 m'],
      answerIndex: 1,
      explanation: 'Frank Lloyd Wright’s proposal aimed for about 1,609–1,610 meters (a “mile high”).',
      tags: ['wright', 'mile-high-tower', 'skyscraper']
    },
    {
      id: '2',
      type: 'mcq',
      question: 'How many stories was the Mile-High Tower designed to have?',
      choices: ['108 stories', '528 stories', '337 stories', '265 stories'],
      answerIndex: 1,
      explanation: 'Wright envisioned the tower at 528 stories—an extreme leap beyond existing skyscrapers.',
      tags: ['wright', 'mile-high-tower', 'scale']
    },
    {
      id: '3',
      type: 'fitb',
      prompt:
        'Wright’s “_____” foundation concept used a central steel core anchored deep into bedrock, allowing the tower to sway slightly like a tree.',
      answers: ['taproot', 'taproot foundation', 'tap root'],
      explanation: 'The “Taproot” idea was inspired by nature: anchor deep, flex slightly, don’t rigidly fight wind.',
      tags: ['wright', 'structure', 'foundation']
    },
    {
      id: '4',
      type: 'mcq',
      question: 'What type of elevators did Wright imagine to serve the Mile-High Tower?',
      choices: ['Hydraulic elevators', 'Steam-powered elevators', 'Atomic-powered elevators', 'Pneumatic tube lifts'],
      answerIndex: 2,
      explanation: 'He proposed atomic-powered elevators to make vertical travel feasible at extreme height.',
      tags: ['wright', 'technology', 'elevators']
    },
    {
      id: '5',
      type: 'fitb',
      prompt: 'Wright imagined elevators traveling at about ____ mph in the Mile-High Tower.',
      answers: ['60', '60 mph', 'sixty'],
      explanation: 'The concept called for around 60 mph elevator travel to move people efficiently.',
      tags: ['wright', 'elevators', 'speed']
    },
    {
      id: '6',
      type: 'mcq',
      question: 'The Mile-High Tower was intended to house roughly how many people?',
      choices: ['10,000', '32,000', '57,000', '100,000'],
      answerIndex: 3,
      explanation: 'It was conceived as a “vertical city” for about 100,000 residents.',
      tags: ['wright', 'vertical-city', 'population']
    },
    {
      id: '7',
      type: 'mcq',
      question: 'Which city was the intended location for Wright’s Mile-High Tower proposal?',
      choices: ['New York City', 'Chicago', 'Paris', 'Brasília'],
      answerIndex: 1,
      explanation: 'The Illinois was proposed for Chicago as a radical skyscraper concept.',
      tags: ['wright', 'chicago', 'proposal']
    },
    {
      id: '8',
      type: 'mcq',
      question: 'In Wright’s vision, the “vertical city” idea primarily aimed to:',
      choices: [
        'Eliminate the need for parks and green space',
        'Consolidate a city center into one building to preserve surrounding landscape',
        'Replace all highways with rail-only transport',
        'Increase urban sprawl across the countryside'
      ],
      answerIndex: 1,
      explanation:
        'By stacking the city center vertically, the surrounding landscape could remain open—aligned with Broadacre ideals.',
      tags: ['wright', 'urban-vision', 'landscape']
    },

    // ----------------------------
    // Broadacre City (6)
    // ----------------------------
    {
      id: '9',
      type: 'mcq',
      question: 'Broadacre City’s “One-Acre Rule” proposed that:',
      choices: [
        'Every family should live in a high-rise apartment',
        'Every family should receive at least one acre of land',
        'Every city should be limited to one acre',
        'Each neighborhood should have one central park only'
      ],
      answerIndex: 1,
      explanation: 'Wright proposed granting each family a minimum of one acre for self-sufficiency.',
      tags: ['wright', 'broadacre', 'land']
    },
    {
      id: '10',
      type: 'mcq',
      question: 'Broadacre City is best described as:',
      choices: [
        'A centralized megacity of dense skyscrapers',
        'An anti-urban, low-density decentralized landscape replacing the traditional city',
        'A medieval walled city model',
        'A single industrial company town'
      ],
      answerIndex: 1,
      explanation: 'Broadacre rejects the “monolithic” city in favor of dispersed settlement across the countryside.',
      tags: ['broadacre', 'decentralization', 'theory']
    },
    {
      id: '11',
      type: 'fitb',
      prompt: 'Broadacre City relies heavily on the automobile and the ____ to bridge long distances between neighbors.',
      answers: ['telephone', 'phone', 'telephones'],
      explanation: 'Cars and telecommunications were the key connectors in Wright’s dispersed model.',
      tags: ['broadacre', 'mobility', 'technology']
    },
    {
      id: '12',
      type: 'mcq',
      question: 'Which infrastructure system was essential to Broadacre City’s layout?',
      choices: ['A massive network of superhighways', 'A ban on road building', 'Canal-only freight routes', 'Subway-only commuting'],
      answerIndex: 0,
      explanation: 'The plan depended on superhighways to connect widely spaced homes, work, and services.',
      tags: ['broadacre', 'transport', 'infrastructure']
    },
    {
      id: '13',
      type: 'mcq',
      question: 'Broadacre City’s “Organic Architecture” favored buildings that were:',
      choices: [
        'Low-slung and horizontal, blending with natural topography',
        'Tall, glass towers dominating the skyline',
        'Strictly identical regardless of site',
        'Built without regard to landscape'
      ],
      answerIndex: 0,
      explanation: 'Wright emphasized architecture that sits with the land—low, horizontal, and integrated.',
      tags: ['broadacre', 'organic-architecture', 'design']
    },
    {
      id: '14',
      type: 'fitb',
      prompt: 'A key aim of the One-Acre Rule was household ____ through growing food and self-sufficiency.',
      answers: ['self-sufficiency', 'self sufficiency', 'self sufficent', 'self-sufficient'],
      explanation: 'The acre was meant to support families with space for food production and independence.',
      tags: ['broadacre', 'self-sufficiency', 'land']
    },

    // ----------------------------
    // Le Corbusier (Le Contemporaine + City of Towers) (6)
    // ----------------------------
    {
      id: '15',
      type: 'mcq',
      question: 'Le Corbusier’s “Le Contemporaine” concept was designed for a population of about:',
      choices: ['32,000', '57,000', '100,000', '3,000,000'],
      answerIndex: 3,
      explanation: 'It was a modernist high-rise vision scaled for roughly three million people.',
      tags: ['le-corbusier', 'modernism', 'planning']
    },
    {
      id: '16',
      type: 'mcq',
      question: 'A defining feature of Le Corbusier’s “Le Contemporaine” plan included:',
      choices: [
        'High-rise offices and residences with a greenbelt',
        'One-acre farms for every household',
        'A complete ban on automobiles',
        'Medieval street patterns and walls'
      ],
      answerIndex: 0,
      explanation: 'It combined towers with planned green belts—an iconic modernist planning move.',
      tags: ['le-corbusier', 'greenbelt', 'towers']
    },
    {
      id: '17',
      type: 'mcq',
      question: '“City of Towers” was presented by Le Corbusier in which book?',
      choices: ['Garden Cities of To-morrow', 'The Cities of Tomorrow', 'Delirious New York', 'The Death and Life of Great American Cities'],
      answerIndex: 1,
      explanation: 'Le Corbusier outlined the “City of Towers” concept in “The Cities of Tomorrow.”',
      tags: ['le-corbusier', 'text', 'theory']
    },
    {
      id: '18',
      type: 'mcq',
      question: 'Le Corbusier’s early high-density “super building” example was the Unite d’Habitation in:',
      choices: ['Chicago', 'Marseilles (Marseille)', 'New Delhi', 'Canberra'],
      answerIndex: 1,
      explanation: 'Unite d’Habitation in Marseille is a key built precedent for his dense living ideas.',
      tags: ['le-corbusier', 'unite', 'housing']
    },
    {
      id: '19',
      type: 'fitb',
      prompt: 'The Unite d’Habitation “super building” contained ____ dwellings.',
      answers: ['337', '337 dwellings'],
      explanation: 'The example cited is a super building with 337 dwellings.',
      tags: ['le-corbusier', 'housing', 'numbers']
    },
    {
      id: '20',
      type: 'mcq',
      question: 'In the “City of Towers” description, the Unite d’Habitation’s site area was roughly:',
      choices: ['10 acres', '10 hectares', '10 square miles', '10 blocks'],
      answerIndex: 0,
      explanation: 'It’s described as 337 dwellings on about 10 acres of land.',
      tags: ['le-corbusier', 'density', 'site']
    },

    // ----------------------------
    // New Capitals (12) — Delhi, Canberra, Chandigarh, Brasília
    // ----------------------------
    {
      id: '21',
      type: 'mcq',
      question: 'New Delhi’s capital plan was designed primarily by:',
      choices: ['Walter Burley Griffin', 'Sir Edward Lutyens', 'Lúcio Costa', 'Oscar Niemeyer'],
      answerIndex: 1,
      explanation: 'Sir Edward Lutyens designed New Delhi’s major axial plan and government precinct.',
      tags: ['new-capitals', 'new-delhi', 'planner']
    },
    {
      id: '22',
      type: 'fitb',
      prompt: 'New Delhi was organized around Kingsway, an east–west axis about ____ miles long.',
      answers: ['1.5', '1.5 miles', 'one point five', 'one and a half', 'one-and-a-half'],
      explanation: 'The plan highlights Kingsway as a 1.5-mile east–west axis.',
      tags: ['new-capitals', 'new-delhi', 'axis']
    },
    {
      id: '23',
      type: 'mcq',
      question: 'New Delhi’s planned growth beyond which population was not contemplated in the original vision?',
      choices: ['32,000', '57,000', '100,000', '3,000,000'],
      answerIndex: 1,
      explanation: 'The plan envisioned low “garden-city” density and did not anticipate growth beyond 57,000.',
      tags: ['new-capitals', 'new-delhi', 'population']
    },
    {
      id: '24',
      type: 'mcq',
      question: 'New Delhi’s planned area (as cited) covers approximately:',
      choices: ['265 hectares', '2,650 hectares', '26,500 hectares', '2650 square miles'],
      answerIndex: 1,
      explanation: 'The plan is cited as covering about 2,650 hectares.',
      tags: ['new-capitals', 'new-delhi', 'scale']
    },
    {
      id: '25',
      type: 'mcq',
      question: 'Canberra’s plan reflects which planning movement, emphasizing monumental civic order and composition?',
      choices: ['Broadacre City', 'City Beautiful', 'Garden City', 'New Urbanism'],
      answerIndex: 1,
      explanation: 'Canberra’s design uses City Beautiful principles like formal geometry and civic symbolism.',
      tags: ['new-capitals', 'canberra', 'city-beautiful']
    },
    {
      id: '26',
      type: 'fitb',
      prompt: 'The competition-winning planner of Canberra was ____.',
      answers: ['walter burley griffin', 'griffin', 'walter griffin', 'w b griffin', 'walter b griffin'],
      explanation: 'Walter Burley Griffin won the competition to plan Canberra.',
      tags: ['new-capitals', 'canberra', 'planner']
    },
    {
      id: '27',
      type: 'mcq',
      question: 'Chandigarh is divided into self-contained “Sectors” typically sized around:',
      choices: ['80m x 120m', '800m x 1200m', '3,000 acres x 1,500 acres', '1.5 miles x 1.5 miles'],
      answerIndex: 1,
      explanation: 'The Chandigarh plan uses superblock-like sectors, typically 800m by 1200m.',
      tags: ['new-capitals', 'chandigarh', 'urban-form']
    },
    {
      id: '28',
      type: 'mcq',
      question: 'Each Chandigarh sector was designed as a “neighborhood unit” so residents could meet daily needs within:',
      choices: ['a 2-minute walk', 'a 10-minute walk', 'a 30-minute drive', 'a 1-hour commute'],
      answerIndex: 1,
      explanation: 'The sectors include schools, markets, worship, and green space within a 10-minute walk.',
      tags: ['new-capitals', 'chandigarh', 'walkability']
    },
    {
      id: '29',
      type: 'fitb',
      prompt:
        'In Chandigarh’s “circulatory system,” Le Corbusier used a hierarchical road network called the ____ (also known as “Les Sept Voies”).',
      answers: ['7vs', '7 v', 'seven vs', 'les sept voies', 'sept voies'],
      explanation: 'The 7Vs separate fast vehicular traffic from pedestrians and cyclists through hierarchy.',
      tags: ['new-capitals', 'chandigarh', 'roads']
    },
    {
      id: '30',
      type: 'mcq',
      question: 'In Le Corbusier’s biological analogy for Chandigarh, the “Lungs” correspond to:',
      choices: [
        'The Capitol Complex in Sector 1',
        'Leisure Valley and green belts running through the city',
        'The airport and rail terminal',
        'The industrial ring road'
      ],
      answerIndex: 1,
      explanation: 'The “Lungs” are the green systems—Leisure Valley and connected green belts.',
      tags: ['new-capitals', 'chandigarh', 'green-space']
    },
    {
      id: '31',
      type: 'mcq',
      question: 'Brasília’s Plano Piloto is famously shaped like an airplane (or bird), organized around two main axes. The “Wings” are the:',
      choices: ['Monumental Axis', 'Residential Axis', 'Industrial Axis', 'Coastal Axis'],
      answerIndex: 1,
      explanation: 'The Residential Axis forms the “wings,” holding superquadras and community services.',
      tags: ['new-capitals', 'brasilia', 'plano-piloto']
    },
    {
      id: '32',
      type: 'mcq',
      question: 'Which option correctly matches key roles in Brasília’s creation?',
      choices: [
        'Lúcio Costa (architect), Oscar Niemeyer (planner), Kubitschek (engineer)',
        'Kubitschek (president/vision), Lúcio Costa (urban planner), Oscar Niemeyer (architect)',
        'Walter Burley Griffin (planner), Lutyens (architect), Haussmann (president)',
        'Le Corbusier (president/vision), Wright (planner), Burnham (architect)'
      ],
      answerIndex: 1,
      explanation:
        'Kubitschek drove the project politically; Costa planned the layout; Niemeyer designed iconic government buildings.',
      tags: ['new-capitals', 'brasilia', 'key-figures']
    },

    // ----------------------------
    // The City Beautiful Movement (8)
    // ----------------------------
    {
      id: '33',
      type: 'mcq',
      question: 'The City Beautiful Movement flourished primarily during which period?',
      choices: ['1690s–1720s', '1790s–1820s', '1890s–1920s', '1950s–1980s'],
      answerIndex: 2,
      explanation: 'It was a North American planning philosophy most active from the 1890s through the 1920s.',
      tags: ['city-beautiful', 'history', 'timeline']
    },
    {
      id: '34',
      type: 'mcq',
      question: 'The core philosophy of the City Beautiful Movement argued that:',
      choices: [
        'More highways automatically create better citizens',
        'Beautifying the city can promote social order and civic virtue',
        'Cities should avoid public spaces and monuments',
        'Skyscraper density is the only solution to poverty'
      ],
      answerIndex: 1,
      explanation:
        'Advocates believed monumental beauty and order could inspire civic loyalty and more “law-abiding” behavior.',
      tags: ['city-beautiful', 'philosophy', 'civic-virtue']
    },
    {
      id: '35',
      type: 'mcq',
      question: 'Which is NOT a typical City Beautiful design characteristic influenced by Beaux-Arts planning?',
      choices: [
        'Public parks and fountains',
        'Classical (Neoclassical/Renaissance) architecture',
        'Wide boulevards creating long vistas',
        'Scattered, unplanned building facades with no coordination'
      ],
      answerIndex: 3,
      explanation:
        'City Beautiful emphasized coordinated monumental form, not random or unregulated streetscapes.',
      tags: ['city-beautiful', 'design', 'beaux-arts']
    },
    {
      id: '36',
      type: 'mcq',
      question: 'Baron Haussmann’s renovation of Paris (1853–1870) was commissioned by:',
      choices: ['King George V', 'Emperor Napoleon III', 'President Juscelino Kubitschek', 'Prime Minister Nehru'],
      answerIndex: 1,
      explanation: 'Napoleon III commissioned Haussmann to modernize Paris into a functional imperial capital.',
      tags: ['city-beautiful', 'haussmann', 'paris']
    },
    {
      id: '37',
      type: 'mcq',
      question: 'Haussmann’s core strategy—often described as “the gutting of old Paris”—primarily involved:',
      choices: [
        'Preserving medieval street patterns exactly as they were',
        'Demolishing neighborhoods to create wide, straight boulevards',
        'Replacing roads with canals',
        'Building only underground tunnels for movement'
      ],
      answerIndex: 1,
      explanation: 'He cut broad avenues through dense areas to improve flow, connect stations, and reshape control of streets.',
      tags: ['city-beautiful', 'haussmann', 'boulevards']
    },
    {
      id: '38',
      type: 'mcq',
      question: 'One political/strategic reason Haussmann’s wide boulevards mattered was to:',
      choices: [
        'Help revolutionaries build stronger barricades',
        'Prevent effective barricades by making streets harder to block',
        'Ban all public gatherings',
        'Move government buildings outside the city permanently'
      ],
      answerIndex: 1,
      explanation: 'Straight, wide avenues reduced the ability to block streets with barricades during uprisings.',
      tags: ['city-beautiful', 'haussmann', 'politics']
    },
    {
      id: '39',
      type: 'mcq',
      question: 'Typical Haussmann-era boulevard buildings were characterized by:',
      choices: [
        'Cream limestone, 5–6 stories, aligned balconies, and mansard roofs',
        'Timber facades, 2 stories, irregular rooflines',
        'Concrete megastructures with exposed highways',
        'Glass curtain walls and 80-story towers'
      ],
      answerIndex: 0,
      explanation:
        'Uniform façades created a harmonious street wall: limestone, mid-rise height, aligned balconies, and mansard roofs.',
      tags: ['city-beautiful', 'haussmann', 'architecture']
    },
    {
      id: '40',
      type: 'mcq',
      question: 'Daniel Burnham’s 1909 Plan of Chicago echoed Haussmann by emphasizing:',
      choices: [
        'A return to medieval alleys and dead ends',
        'Diagonal streets and radial boulevards to shape grand civic order',
        'Eliminating civic centers and plazas',
        'One-acre farms for each household'
      ],
      answerIndex: 1,
      explanation:
        'Burnham explicitly studied Paris and adapted diagonal/radial boulevard ideas—often described as “Paris on the Prairie.”',
      tags: ['city-beautiful', 'burnham', 'chicago']
    }
  ]
};