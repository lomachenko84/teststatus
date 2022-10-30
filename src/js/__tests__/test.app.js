import { check } from "../app.js";

test("check function", () => {
    const check1 = check([
        {name: 'мечник', health: 5},
        {name: 'маг', health: 90},
        {name: 'лучник', health: 60},
      ])
    expect(check1).toEqual([{ name: 'маг', health: 90 },  
    { name: 'лучник', health: 60 },
    { name: 'мечник', health: 5 } 
  ])
})