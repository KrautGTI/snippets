const battle = [
            {
               id: 0,
               name: 'Select Battle',
               length: 0,
               startDigit: 0,
            },
            {
               id: 1,
               name: 'Name',
               length: 2,
               startDigit: 1,
            },
            {
               id: 2,
               name: 'Name2',
               length: 2,
               startDigit: 1,
            },
         ]
const play = [
            {
               id: 0,
               name: 'Select Level',
               url: '',
               parentId: 0,
            },
            {
               id: 1,
               name: 'Battle 1',
               url: '',
               parentId: 1,
            },
            {
               id: 2,
               name: 'Battle 2',
               url: '',
               parentId: "Select Battle",
            },
]
export { battle, play }