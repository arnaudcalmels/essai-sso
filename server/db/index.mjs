export default {
    'admin@example.com': {
        firstname: 'Admin',
        lastname: 'Mystère',
        password: 'testtest',
        github: 'adminer'
    }
}

export const find = (db, key) => {
    if (Object.keys(db).includes(key)) {
        return db[key];
    }

    return false;
}
