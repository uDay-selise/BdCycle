export type NavItem = { label: string; path: string };

export const site = {
  brand: "Bd Cycle",
  email: "hello@bdcycle.com",
};

export const home = {
  eyebrow: "Group rides · everyone welcome",
  title: "Ride with Bd Cycle",
  lead: "We're a friendly group of local riders. Come along for an easy-going spin on the quiet lanes around town — no one gets left behind.",
  joinLabel: "Join a ride",
  eventsLabel: "See coming rides",
};

export const join = {
  eyebrow: "Come along",
  title: "Join a ride",
  intro:
    "Fancy riding with Bd Cycle? Tell us a little about yourself and which ride you're eyeing up. We'll drop you a line back with everything you need to know.",
  emailNote: "You can also email us directly at",
  fields: {
    name: "Your name",
    email: "Email address",
    ride: "Which ride interests you?",
    message: "Your message",
  },
  ridePlaceholder: "Not sure yet — tell us what suits you",
  messagePlaceholder: "Anything you'd like us to know?",
  submit: "Send message",
  hint: "Sending opens your own email app with the message ready to go — nothing is stored on this site.",
  errors: {
    name: "Please add your name.",
    email: "Please add your email address.",
  },
};

export type Ride = {
  name: string;
  date: string;
  time: string;
  meetingPoint: string;
};

export const events = {
  eyebrow: "Coming up",
  title: "Bd Cycle rides",
  intro:
    "Every ride below starts from one meeting point at one time. Pick one that suits you and let us know you're coming.",
  listLabel: "Next rides",
  rideLabels: {
    date: "Date",
    time: "Starts",
    meetingPoint: "Meets at",
  },
  seasonNote:
    "Next season's rides are being planned — send us a message and we'll tell you when dates are set.",
};

export const rides: Ride[] = [
  {
    name: "Sunday morning loop",
    date: "Sunday 5 April",
    time: "9:00am",
    meetingPoint: "The Old Mill car park, Bridge Street",
  },
  {
    name: "Midweek evening ride",
    date: "Wednesday 8 April",
    time: "6:30pm",
    meetingPoint: "Market Square, by the fountain",
  },
  {
    name: "Lanes and café stop",
    date: "Saturday 18 April",
    time: "10:00am",
    meetingPoint: "Riverside Park gates, Mill Lane",
  },
  {
    name: "Gentle newcomer's ride",
    date: "Sunday 26 April",
    time: "9:30am",
    meetingPoint: "The Old Mill car park, Bridge Street",
  },
];

export const about = {
  eyebrow: "Who we are",
  title: "A friendly bunch of local riders",
  intro:
    "Bd Cycle started with a handful of riders who liked the idea of a no-pressure ride out and a good natter at the halfway stop. It's grown by word of mouth ever since.",
  paragraphs: [
    "We ride the quiet lanes and gentle back roads around our corner of town — the kind of routes where you can still hold a conversation. Routes change with the season, and we're always happy to show a newcomer the way.",
    "The pace is easy and unhurried. We wait at the tops of hills, regroup at junctions and never leave anyone on their own. If you can ride for an hour at a chatty pace, you'll fit right in.",
    "There's no kit to buy and nothing to prove. Bring a bike that works, a bit of water and a smile — that's the whole list.",
  ],
};

export const homeHighlights: { title: string; text: string }[] = [
  {
    title: "Local lanes",
    text: "We meet close to town and head out on quiet roads where the chat can keep going.",
  },
  {
    title: "An easy pace",
    text: "Relaxed rides with plenty of stops. If you can ride for an hour, you're ready to come along.",
  },
  {
    title: "Good company",
    text: "New faces and old friends alike. Bring a bike that works and a smile — that's the lot.",
  },
];