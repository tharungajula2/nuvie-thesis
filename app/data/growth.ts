import { GrowthMessageFit } from '../types';

export const growthMessageFits: GrowthMessageFit[] = [
  {
    id: 'msg-indulgence',
    framingName: 'Indulgence-First',
    primaryHook: 'Leading with the immediate sensory reward (e.g., "A better answer to the craving").',
    bestOccasionId: 'Afternoon Slump / Late Night Craving',
    failureMode: 'Fails immediately if sensory delivery feels fake or chalky.',
    repeatTrigger: 'Emotional satisfaction and guilt reduction.',
    trustRequirement: 'Believable taste and texture validation.',
    themeColor: '#8B4513',
  },
  {
    id: 'msg-utility',
    framingName: 'Utility & Speed',
    primaryHook: 'Leading with convenience and no-prep usefulness (e.g., "Real nutrition in 10 seconds").',
    bestOccasionId: 'Breakfast Rescue / Rush',
    failureMode: 'Fails if it feels functional but forgettable.',
    repeatTrigger: 'Low-friction routine formation.',
    trustRequirement: 'Clear nutritional trust and easy usability.',
    themeColor: '#4A4232',
  },
  {
    id: 'msg-ritual',
    framingName: 'Ritual Upgrade',
    primaryHook: 'Replacing an existing mandatory habit with a better version (e.g., "Your coffee, upgraded").',
    bestOccasionId: 'Mandatory Ritual Moments',
    failureMode: 'Fails if it asks users to change too much at once.',
    repeatTrigger: 'Habit replacement, not just trial.',
    trustRequirement: 'Strong occasion fit and minimal friction.',
    themeColor: '#5C4033',
  }
];
