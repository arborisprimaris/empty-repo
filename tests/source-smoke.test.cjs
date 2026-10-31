'use strict';
const assert = require('node:assert/strict');
const pet = require('../src/tamagotchi.js');
const physical = require('../src/physical.js');
const ai = require('../src/offline-ai.js');

assert.equal(pet.GOALS.length, 5);
assert.equal(Object.keys(pet.NEEDS).length, 6);
assert.equal(pet.record(pet.fresh(1), 'unknown_action', 'user', 1).recorded, false);

const initial = pet.fresh(1);
const afterFood = pet.record(initial, 'feed', 'user', 1);
assert.equal(afterFood.recorded, true);
assert.equal(afterFood.pet.today.food, 1);
assert.equal(afterFood.pet.totalCare, 1);
assert.ok(afterFood.pet.badges.includes('first_care'));
assert.equal(initial.totalCare, 0, 'previous state should not be mutated');

const afterWater = pet.record(afterFood.pet, 'drink', 'user', 1).pet;
assert.equal(afterWater.today.water, 1);
const nextDay = pet.rollDay(afterWater, 2);
assert.equal(nextDay.day, 2);
assert.equal(nextDay.today.food, undefined);
assert.equal(nextDay.history.length, 1);
assert.equal(nextDay.history[0].count, 2);

const assessment = pet.assess({ hunger: 10, thirst: 60, energy: 90, clean: 90, happy: 90, social: 90 }, nextDay, 700);
assert.equal(assessment.priority.key, 'hunger');
assert.equal(assessment.priority.action, 'feed');
assert.equal(assessment.total, 5);

const move = physical.stage({ kind: 'feed', phase: 'walking', propId: 'table' });
assert.equal(move.name, 'approach');
assert.equal(typeof ai.prompt, 'function');
assert.ok(ai.prompt([],[],{room:'Apartment',time:'07:00',day:1}).includes('Holographic'));
console.log('Holographic source-smoke tests: passed');
