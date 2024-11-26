import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
  const currentContacts = await readContacts();
  const newContacts = await Array(number)
    .fill(0)
    .map(() => createFakeContact());

  await writeContacts([...currentContacts, ...newContacts]);
};

generateContacts(5);
