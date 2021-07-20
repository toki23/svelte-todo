import { writable } from 'svelte/store';

export const items1 = writable([]);


export const items2 = writable([]);
export const items3 = writable([]);


export const del = (id) => {
    console.log("call delete:  " + id);
    items1.update(items1 => items1.filter(item => item.id !== id));
    items2.update(items2 => items2.filter(item => item.id !== id));
    items3.update(items3 => items3.filter(item => item.id !== id));


}