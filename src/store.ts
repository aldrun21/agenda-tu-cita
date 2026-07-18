import { Appointment, BlockedSlot } from './types';

const APPOINTMENTS_KEY = 'derm_appointments';
const BLOCKED_SLOTS_KEY = 'derm_blocked_slots';

export const getAppointments = (): Appointment[] => {
  const data = localStorage.getItem(APPOINTMENTS_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveAppointment = (appointment: Appointment) => {
  const apps = getAppointments();
  apps.push(appointment);
  localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(apps));
};

export const getBlockedSlots = (): BlockedSlot[] => {
  const data = localStorage.getItem(BLOCKED_SLOTS_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveBlockedSlot = (slot: BlockedSlot) => {
  const slots = getBlockedSlots();
  if (!slots.some(s => s.date === slot.date && s.time === slot.time)) {
    slots.push(slot);
    localStorage.setItem(BLOCKED_SLOTS_KEY, JSON.stringify(slots));
  }
};

export const removeBlockedSlot = (date: string, time: string | 'ALL') => {
  let slots = getBlockedSlots();
  slots = slots.filter(s => !(s.date === date && s.time === time));
  localStorage.setItem(BLOCKED_SLOTS_KEY, JSON.stringify(slots));
};

export const TIME_SLOTS = [
  '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
];
