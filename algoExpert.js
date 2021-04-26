const performance = require('perf_hooks').performance;

let a = [
  { Phase: "Phase 1", Value: "5" },
  { Phase: "Phase 1", Value: "10" },
  { Phase: "Phase 1", Value: "15" },
  { Phase: "Phase 1", Value: "20" },
  { Phase: "Phase 4", Value: "95" },
  { Phase: "Phase 2", Value: "25" },
  { Phase: "Phase 2", Value: "30" },
  { Phase: "Phase 2", Value: "35" },
  { Phase: "Phase 2", Value: "40" },
  { Phase: "Phase 2", Value: "40" },
  { Phase: "Phase 3", Value: "60" },
  { Phase: "Phase 3", Value: "60" },
  { Phase: "Phase 3", Value: "60" },
  { Phase: "Phase 3", Value: "60" },
  { Phase: "Phase 5", },
]

let hash = {}, map = new Map()
a.forEach(item => {
  if (item.Phase in hash) {
    hash[item.Phase].push(item.Value)
  } else {
    hash[item.Phase] = [item.Value || '0']
  }
})


a.forEach(item => {
  if (map.has(item.Phase)) {
    map.get(item.Phase).push(item.Value)
  } else {
    map.set(item.Phase, [item.Value || '0'])
  }
})

console.log(Object.fromEntries(map), 'map from object')
console.log('--------------')
console.log(map, 'Map es6')
console.log('--------------')
let b = [], colorHash = {}, numberHash = {}
a.forEach((item, index) => {
  colorHash[item.Phase] = item.Phase
  if (item.Phase in numberHash) {
    numberHash[item.Phase].push(item.Value)
  } else {
    numberHash[item.Phase] = [item.Value || '0']
  }
})

for (let keyNum in numberHash) {
  for (let keyColor in colorHash) {
    if (keyColor === keyNum) {
      b.push({ name: colorHash[keyColor], item: numberHash[keyNum] })
    }
  }
}
console.log(b, 'grouped')
console.log('--------------')


db.artists.aggregate([
  {
    $bucket: {
      groupBy: '$yearBorn',
      boundaries: [1840, 1850, 1860, 1870, 1880],
      output: {
        count: { $sum: 1 },
        'artists': {
          $push: {
            name: { $concat: ['$firstName', ' ', '$lastName'] },
            'DOB': '$yearBorn'
          }
        }
      }
    }
  }
]).pretty()

db.artists.aggregate([
  { $match: { nationality: { $regex: /^H/ } } },
  {
    $group: {
      _id: '$nationality',
      count: { $sum: 1 },
      name: {
        $addToSet:
        {
          name:
          {
            $concat: ['$first_name', ' ', '$last_name']
          }
        }
      }
    }
  },
  { $sort: { first_name: 1 } }
]).pretty()

db.artists.aggregate([
  {
    $group: {
      _id: '$nationality',
      count: { $sum: 1 },
      name: {
        $addToSet:
        {
          name:
          {
            $concat: ['$first_name', ' ', '$last_name']
          }
        }
      }
    }
  },
  { $sort: { count: 1 } }
]).pretty()

db.artists.aggregate([
  {
    $project: {
      _id: 1,
      first_name: 1
    }
  },
  {
    $sort: { first_name: 1 }
  }
]).pretty()

//for renaming field
db.cars.updateMany({}, { $rename: { 'belongings': 'owner' } })

db.cars.aggregate([
  {
    $lookup: {
      from: 'consumers',
      localField: 'owner',
      foreignField: '_id',
      as: 'owner'
    }
  }
]).pretty()


db.consumers.aggregate([
  {
    $project: {
      '_id': 0,
      intialletter: {
        $concat: [
          {
            $toUpper: {
              $substr: ['$name', 0, 1]
            }
          },
          {
            $substr:
              ['$name', 1, { $strLenCP: "$name" }]
          }
        ]
      }
    }
  }
]).pretty()

db.consumers.aggregate([
  {
    $project: {
      '_id': 0,
      full_name: { $split: ['$name', ' '] },
    },
  },
  { $unwind: '$full_name' },
  {
    $project: {
      '_id': 0,
      full_name: 1
    }
  }
]).pretty()
