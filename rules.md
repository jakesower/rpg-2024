# RPG

## Goal

Make a fun RPG with novel rules and interesting combat.

## Character Creation

### Attributes

- **Strength**: Heavy equipment, melee
- **Dexterity**: Ranged, saves
- **Constitution**: HP, saves
- **Wit**: Hand size, saves
- **Resolve**: FP, saves
- **Spirit**: BFP, saves

### Starting Stats

- Assign attributes at 5, 4, 3, 3, 2.
- HP = 5 + 2\*Toughness + 1\*Resolve + 1\*Spirit
- Bursts = Wit

## Dice System

The goal of rolling dice is to get tuples: doubles, triples, quaduples, and quintuples. For any check, roll some number of d6s and d10s.

- Should a player have fewer than 2 dice, d10s are added until the player has 2 dice.
- Roll all the dice at once.
- Should all the dice show the same number, roll an additional 1d10. Keep doing this until a repeat is not rolled.
- Remove all dice showing "0".
- Group the remaining dice to make doubles, triples, etc.
- The success of the action depends on these groupings.

Dice pools are composed of d6s corresponding to a skill plus some number of d10s from items and situations.

## Skills

Skills reflect training and practice along a particular path. Skills are a cornerstone for character improvement. They are the most reliable way that a character can gain access to d6s in their dice pools. Each skill is tied to an attribute. Skill checks are paired with their attribute frequently, so leveling up skills in the areas you have good attributes tends to create the biggest dice pools.

### Upgrading Skills

Skills can be upgraded using Skill Points (SP) which you can either start with your gain as you level up.

| Skill Level | Total SP Cost |
| ----------- | ------------- |
| 1           | 1             |
| 2           | 3             |
| 3           | 6             |
| 4           | 10            |
| 5           | 15            |

Thus it costs 1 to go from 0 to 1, 2 to go from 1 to 2, and so on.

### Skill Checks

Skill checks have a mix of skills, attributes, and automatic dice. These depend on a variety of factors, including how specialized a task is (e.g. trying to jump far vs cast a spell), how difficult a task is, how well a secondary skill fits the nature of the task, and so on.

Skill checks are denoted as Primary/Secondary + circumstance (difficulty).

Valid examples of skill checks:

- `Awareness`/`Toughness` + 1 (triples).
- `Strength`/- (doubles)
- -/`Armor Use` (doubles)

In each case, the Primary part adds d6s, the secondary d10s, and the circumstance some number of d10s. The circumstances can also be negative, in which case players subtract dice from their pools starting with d10s.

#### Examples

##### Jumping A 10 Foot Gap

This is a mostly unskilled challenge, which means an Attribute should be involved. However, the `athletics` skill does seem directly relevant. The GM might rule that an `Athletics`/`Strength` check is in order, and since the players are 5 feet higher than where they're trying to land, add an additional 3d10. The GM requires doubles for success. Typically in pass/fail checks only doubles are required. The GM can up this threshold to anything they like depending on the difficulty of the circumstances.

##### Noticing a Trap in the Cold

A cleverly disguised trap is a more difficult situation for the players. In this case, an `Awareness`/`Toughness` check is in order. Awareness gauges how well the player notices things, while Toughness indicates how well the player is able to focus given the cold circumstances. The GM chooses to go with `Awareness`/`Toughness` (doubles). The GM could have just as easily gone with `Awareness`/`Toughness` + `Wit` (triples). The goal is to be flexible and try to take into account various factors and difficulty. Keeping rolls to fewer elements is preferable, and `Awareness`/`Toughness` is the simpler choice.

##### Lifting a Boulder

The GM decides that this is a raw test of strength that no skill can help with. In this case they decide that a `Strength`/- check is called for. The boulder is ridiculously heavy, so the GM demands quadruples be rolled for success.

### Skill List

#### Strength

- Armor Use
- Athletics
- Power

#### Dexterity

- Craft
- Finesse
- Ranged
- Sneak

#### Toughness

-

#### Wit

- Artifice Magic
- Awareness
- Chaos Magic
- Knowledge
- Nature Magic
- Order Magic

#### Resolve

-

#### Spirit

- Charm
- Death Magic
- Deception
- Life Magic
- Intimidation

## Weapons

- Use SCIPR as baseline (slashing, chopping, impact, piercing, ranged).
- For defense: plate, padding, mail, parry.

Effectiveness of each weapon type against each armor type. (Strong indicates the weapon is effective against the armor. Weak indicates the armor is effective against the weapon.)

| |Plate|Padding|Mail|Parry|No Armor|
|Slashing|Weak|V. Strong|Weak|Moderate|V. Strong|
|Chopping|Weak|Strong|Moderate|Weak|Strong|
|Impact|Strong|Weak|Strong|Moderate|Moderate|
|Piercing|Moderate|Strong|Strong|Weak|Moderate|
|Ranged|Moderate|Strong|Strong|Strong|Moderate|

Defensive bonuses:

- Plate: DR of 1 or 2
- Padding: 6s are always failures in attacks or 6s and 7s are failures in attacks
- Mail: Immune to doubles
- Parry: Dice pool to counter (double negates double; triple negates triple, etc.)

Attack bonuses:

- Slashing: All numbers always count
- Chopping: 6s always count
- Impact: -3 to parry pools
- Piercing: All numbers count, ignore DR on triples
- Ranged: -5 to parry pools, ignore DR on triples, miss without triples

## Magic

Back to the ideals system, but trying to swap out the Light/Dark axis for Nature/Artifice. So

- Life/Death
- Order/Chaos
- Nature/Artifice

I haven't tried putting them into schools, because frankly I don't like schools very much and they never really felt finished. Instead I've made spells have two ideals to form their dice pools. So something with Chaos/Death would give a dice pool of (Chaos)d6 + (Death)d10. This lets different magic skills produce primary effects, but lets secondary schools also play a role. Elemental magic should illuminate that to some extent. All elemental magic has Nature as the primary ideal, but varies on the secondary depending on the element.

I'm also trying to keep the cycle of primary to secondary axes. That is, Order/Chaos will come before Life/Death, Life/Death before Nature/Artifice, and Nature/Artifice before Order/Chaos. I'm not loving this, but the ideals have always been a siren song.

### Elemental Magic

Spellcasters must expend bursts to fuel magic. Magic can come in all kinds, naturally. However, various elemental magicks have various properties:

- Fire: Areas of effects grow, adds burning (Nature/Chaos)
- Water/Ice: Slows enemies (Nature/Order)
- Electrical: Effective against metal armor, can occasionally delay (Nature/Chaos)
- Earth/Acid/Poison: Ongoing damage (Nature/Order)
- Poison: Ongoing damage (Death/Nature)
- Void: Burst damage (Death/Nature)

## Statuses

See: [statuses](lists/statuses.csv)

Statuses are things that you gain and lose due to various game effects. Each status is described with a few characteristics:

- **Name**: The name of the main effect.
- **Description**: What the status does and when it's triggered.
- **Expiration Type**: The circumstances under which the status ends. (See below for details.)
- **Misc**: Special rules pertaining to the card.
- **Heightened Name**: Some statuses can be heightened to a more intense state. Any time you would gain the same status or the heightened status, you lose the base status and gain the heightened one instead. Whenever you lose the heightened status, you gain the base status.
- **Heightened Description**: The effects of the heightened status.

### Status Expirations

- **Trigger**: The status ends immediately after it is triggered. Some effects may give "Trigger Charges" to a status. In this case remove a trigger charge if there is one present. Discard the status when you remove the last trigger charge.
- **Time**: The status ends after a certain amount of time. At the end of each round and at mid round, remove a time counter. Discard the status when you remove the last time counter.
- **Save**: Make a save of the specified type. If it's successful, discard the status.
- **Action**: A particular action must be taken on your turn.
- **Other**: See the description on the status.

### Charges

All charges are kept if a status is heightened or reduced.

### Spells as Statuses

Some spells may grant or inflict spell-specific statuses to you. These follow the normal rules of statuses but have all their effects described by the spell.

## Circumstances

There are a few core situations to which any character is entitled at the moment of action.

| Circumstance | Description                                                                                                | Effect                  |
| ------------ | ---------------------------------------------------------------------------------------------------------- | ----------------------- |
| High Ground  | You are making a `melee attack` or `ranged attack` against someone at a lower elevation.                   | +1 to the attack        |
| Flanking     | You are making a `melee attack` against an opponent who is adjacent to an ally who is not adjacent to you. | +1 to the attack        |
| Overwhelming | You are making a `melee attack` against an opponent who has two or more allies adjacent to them.           | +1 to the attack        |
| Cover        | About half of you is protected by hard surfaces between you and a ranged attacker.                         | +2 Protection vs Ranged |

Circumstances stack, so making good use of them can turn the tide of battle.
