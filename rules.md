# RPG

## Goal

Make a fun RPG with novel rules and interesting combat.

## Character Creation

- Stats: Strength, Dexterity, Reflexes, Toughness, Wit.
- Assign stats at 5, 4, 3, 3, 2.
- HP = 5 + 3*Toughness
- Bursts = Wit

## Dice System

The goal of rolling dice is to get tuples: doubles, triples, quaduples, and quintuples. For any check, roll some number of d6s and d10s.

- Remove all dice showing "0".
- Group the remaining dice to make doubles, triples, etc.
- The success of the action depends on these groupings.

Dice pools are composed of d6s corresponding to an attribute plus some number of d10s from items and situations.

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

## Elemental Magic

Spellcasters must expend bursts to fuel magic. Magic can come in all kinds, naturally. However, various elemental magicks have various properties:

- Fire: Areas of effects grow, adds burning
- Water/Ice: Slows enemies
- Electrical: Effective against metal armor, can occasionally delay
- Earth/Acid/Poison: Ongoing damage
- Poison: Ongoing damage
- Void: Burst damage
- Death: Hampers healing

## Statuses

### Beneficial Statuses

- High Ground: +1 to attacks, both ranged and melee
- Blessed: +1 to all checks; Exalted: +2 to all checks
- Berserk: +1 to melee attacks
- Focused: +1 to all checks
- In Motion: -2 to ranged attacks against you
- Hastened: actions taking 6 or more time take one less time

### Mixed Statuses

- Enlarged: +1 to melee attacks, +2 to time of attacks
- Shrunken: -1 to attacks, -1 to time of attacks

### Negative Statuses

Fire/Water spectrum: Freezing (-2), Chilled/Wet (-1), Normal, Burning (+1), Blazing (+2)
Gaining a fire/water status moves you that many spots along the spectrum.

- Blind: -2 to all melee attacks; -5 to all ranged attacks
- Low Ground: -1 to all attacks
- Wet: Electrical attacks gain +1 against you
- Chilled: +1 time to all actions, doubles on toughness to negate
- Frozen: +2 time to all actions, doubles on toughness to reduce to chilled
- Burning: 1 damage at EOR (end of round), doubles on reflex to negate, stop drop & roll
- Blazing: 1 damage at EOR, doubles on reflex to downgrade to burning, stop drop & roll
- Poisoned: 1 damage at EOR (end of round), doubles on toughness to negate, become contaminated if gains another poisoned
- Contaminated: 1 damage at EOR, doubles on toughness to downgrade to poisoned
- Confused: No recovery of burst at EOR. Wit doubles recovers. Another instance increases to confounded.
- Confounded: No recovery of burst at EOR, Wit reduces to confused.
- Stunned: At start of next turn, delay 2 instead.
- Dazed: At start of next turn, delay 2 instead then get stunned instead of dazed.
- Flanked: +1 to all attacks against you (2 adjacent attackers not adjacent to each other)
- Overwhelmed: +1 to all attacks against you (3+ adjacent attackers)
- Various things to lower stats by 1

## Examples

### Weapons

Weapons have dice pools as well as abilities that trigger on particular tuples.

#### Short Sword

- Dice Pool: Dex + 1d10
- Parry Pool: (Ref - 3)d6 + 4d10
- Speed: 6
- Triples: +1 damage if opponent is unarmored or wearing padded armor.
- Quadruples: Odds: +3 damage ^; Evens: Bleed (1 damage/round)
- Quintuples: +3 damage + Wound (2 damage/round)

#### Long Sword

- Dice Pool: MIN(Str, Dex) + 3d10
- Parry Pool: (Ref - 3)d6 + 4d10
- Speed: 9
- Triples: +1 damage if opponent is unarmored or wearing padded armor.
- Quadruples: Odds: +3 damage ^; Evens: Bleed (1 damage/round)
- Quintuples: +3 damage + Wound (2 damage/round)

#### Small Axe

- Dice Pool: Str + 1d10
- Speed: 7
- Triples: Odds: Push aside 1 square; Evens: +1 damage vs padded/no armor
- Quadruples: Bleed (1 damage/ round); Push aside
- Quintuples: Odd: +4 damage; Even: +3 damage, Wound (2 damage/ round)

#### Terror Axe

- Dice Pool: Str + 5d10
- Speed: 11
- Tuples like small axe

#### Small Hammer

- Dice Pool: Str + 1d10
- Speed: 7
- Triples: Odds: Push aside; Evens: 2 delay
- Quadruples: Push aside + 3 delay
- Quintuples: Push aside 2 + 12 delay

#### Maul

- Dice Pool: Str + 4d10
- Speed: 10
- Triples: Odds: Push aside; Evens: 2 delay
- Quadruples: Push aside + 3 delay
- Quintuples: Push aside 2 + 12 delay

#### Javelin

- Dice Pool: MAX(Str, Dex)
- Speed: 6
- Can be thrown
- Triples: Ignore DR; +1 damage
- Quadruples: Ignore DR; +3 damage
- Quintuples: Ignore DR; +6 damage

#### Can Opener

- Dice Pool: MAX(Str, Dex) + 3d10
- Speed: 9
- Same tuples as javelin

#### Short Bow

- Ranged
- Dice Pool: Dex + 3d10
- Speed: 7
- Doubles: First double does no damage
- Triples: Ignore DR
- Quadruples: Bleed
- Quintuples: Wound

#### Long Bow

- Ranged
- Dice Pool: Dex + 5d10
- Speed: 11
- Doubles: First double does no damage
- Triples: Ignore DR
- Quadruples: Bleed
- Quintuples: Wound

### Spells

#### Fireball

Hits a square and all adjacent squares

Cost: 1 burst
Speed: 9
Dice Pool: 3d10
Save: Reflexes

Doubles: 1 damage
Triples: 2 damage; Even: Victims gain burning; Odd: Radius of fireball increases by 1
Quadruples: 4 damage; +1 radius, Victims set blazing
Quintuples: 7 damage; +2 radius, Victims set blazing

#### Splash

Cost: 1 burst
Speed: 6
Dice Pool: 2d10
Save: Reflexes

Target gains the Wet status

#### Chill Blast

Cost: 1 burst
Speed: 9
Dice Pool: 3d10
Save: Toughness

Doubles: 1 damage
Triples: 3 damage; victim gains chilled status
Quadruples: 5 damage; victim gains frozen status
Quintuples: 8 damage; victim gains frozen status

#### Corrode

Cost: 1 burst
Speed: 8
Dice Pool: 3d10
Save: Toughness

Doubles: 1 damage
Triples: 2 damage; victim poisoned
...

#### Haste

Cost: 1 burst
Speed: 10
Dice Pool: 3d10

Doubles: Target gains `hastened`
Triples: Target gains `hastened` and moves up 1 time
Quadruples: Target gains `hastened` and a second target also gain `hastened`
Quintuples: Any number of targets gain `hastened`

#### Omnisense

Cost: 1 burst
Speed: 8
Dice Pool: 3d10

Doubles: Target is immune to `overwhelmed`

#### Counterspell

Cost: 1 burst
Speed: N/A
Dice Pool: 5d10

Counter another spell's tuples on a 1-1 basis. Gain `stunned`. This spell cannot be cast if you are `dazed`.

#### Move Earth

Cost: 1 burst
Speed: 6
Dice Pool: 3d10

Doubles: Raise or lower 1 square by 1m.
Triples: Raise or lower 2 squares by 1m or 1 square by 2m
Quadruples: 4
Quintuples: 8

#### Make Whole

Cost: 0
Speed: 9
Dice Pool: 3d10

Does not stack.

Doubles: Remove a negative status from the target
Quadruples: Remove a negative status, then remove another one
Quintuples: Remove all negative statuses, then remove all negative statuses again

#### Heal

Cost: 1 burst
Speed: 7
Dice Pool: 3d10

Does not stack

Doubles: Target regains 1 health
Triples: Target regains 4 health
Quadruples: 9
Quintuples: 16

#### Big Heal

Cost: 1 burst
Speed: 11
Dice Pool: 6d10

Same as Heal
