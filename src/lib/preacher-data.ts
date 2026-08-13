export type Broadcaster = {
  id: string; displayName: string; username: string; logo: string; banner: string;
  shortBio: string; longDescription: string; churchName: string; venue: string;
  followers: number; likes: number; totalListeners: number; isLive: boolean;
};
export type Programme = {
  id: string; title: string; preacherName: string; churchName: string; venue: string;
  thumbnail: string; broadcasterId: string; status: 'live' | 'upcoming' | 'recorded';
  duration: string; listeners: number; recordedAt: string; category: string;
};
export type Comment = { id: string; author: string; avatar: string; text: string; timestamp: string; reply?: string };
export type Listener = { id: string; firstName: string; lastName: string; username: string; emailOrPhone: string; following: string[] };
export type BroadcastSession = { id: string; programmeId: string; startedAt: string; isMuted: boolean; listenerCount: number; isRecording: boolean; audioSettings: Record<string, number> };
export type AdminSettings = { brandName: string; logo: string; favicon: string; appIcon: string; pageBackground: string; accentColor: string };

export const broadcasters: Broadcaster[] = [
  { id: 'b1', displayName: 'Mara K. Adebayo', username: '@marak', logo: 'MK', banner: 'sunset', shortBio: 'A warm voice for the working week.', longDescription: 'Mara creates spacious conversations about faith, family, and the courage to begin again.', churchName: 'Harbour Fellowship', venue: 'The Upper Room, Lagos', followers: 2840, likes: 11900, totalListeners: 18420, isLive: true },
  { id: 'b2', displayName: 'David Osei', username: '@davidosei', logo: 'DO', banner: 'ocean', shortBio: 'Scripture, stories, and Sunday morning clarity.', longDescription: 'David is a preacher and programme host who believes good questions make room for better hope.', churchName: 'New Dawn Chapel', venue: 'Adum Community Hall, Kumasi', followers: 1540, likes: 6820, totalListeners: 9320, isLive: false },
  { id: 'b3', displayName: 'Nia Rivers', username: '@niarivers', logo: 'NR', banner: 'berry', shortBio: 'Small practices for a more generous life.', longDescription: 'Nia hosts a weekly devotional for people finding their way back to community.', churchName: 'The Table Church', venue: 'Studio 4, Brixton', followers: 870, likes: 3180, totalListeners: 5210, isLive: false },
];

export const programmes: Programme[] = [
  { id: 'p1', title: 'The courage to stay tender', preacherName: 'Mara K. Adebayo', churchName: 'Harbour Fellowship', venue: 'The Upper Room, Lagos', thumbnail: 'amber', broadcasterId: 'b1', status: 'live', duration: '42 min', listeners: 247, recordedAt: 'Live now', category: 'Reflection' },
  { id: 'p2', title: 'A table with room for you', preacherName: 'Nia Rivers', churchName: 'The Table Church', venue: 'Studio 4, Brixton', thumbnail: 'plum', broadcasterId: 'b3', status: 'upcoming', duration: '30 min', listeners: 0, recordedAt: 'Today · 7:30 PM', category: 'Community' },
  { id: 'p3', title: 'When the road gets quiet', preacherName: 'David Osei', churchName: 'New Dawn Chapel', venue: 'Adum Community Hall, Kumasi', thumbnail: 'teal', broadcasterId: 'b2', status: 'recorded', duration: '58 min', listeners: 0, recordedAt: 'Yesterday', category: 'Teaching' },
  { id: 'p4', title: 'The work of being here', preacherName: 'Mara K. Adebayo', churchName: 'Harbour Fellowship', venue: 'The Upper Room, Lagos', thumbnail: 'clay', broadcasterId: 'b1', status: 'recorded', duration: '36 min', listeners: 0, recordedAt: 'Monday', category: 'Practice' },
];

export const comments: Comment[] = [
  { id: 'c1', author: 'Samira Bello', avatar: 'SB', text: 'This is exactly what I needed to hear before this meeting.', timestamp: '2m' },
  { id: 'c2', author: 'Jon Bell', avatar: 'JB', text: 'The pause after “we can begin again” got me. Thank you.', timestamp: '5m', reply: 'Thank you for staying with that moment, Jon.' },
  { id: 'c3', author: 'Abena K.', avatar: 'AK', text: 'Listening from Accra. The room feels very close today.', timestamp: '8m' },
];

export const defaultSettings: AdminSettings = {
  brandName: 'The Preacher', logo: 'TP', favicon: 'TP', appIcon: 'TP',
  pageBackground: '38 36% 95%', accentColor: '14 69% 60%',
};