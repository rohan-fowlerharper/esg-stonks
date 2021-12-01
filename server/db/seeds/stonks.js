exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('stonks').del()
    .then(function () {
      // Inserts seed entries
      return knex('stonks').insert([
        {
          id: 1,
          esg_id: 11119,
          company_name: 'Algonquin Power & Utilities Corp.',
          exchange_symbol: 'TSE',
          stock_symbol: 'AQN',
          environment_grade: 'AA',
          environment_level: 'Excellent',
          social_grade: 'BB',
          social_level: 'Medium',
          governance_grade: 'BB',
          governance_level: 'Medium',
          total_grade: 'A',
          total_level: 'High',
          last_processing_date: '04-11-2021',
          environment_score: 671,
          social_score: 341,
          governance_score: 300,
          total: 1312
        },
        {
          id: 2,
          esg_id: 2664,
          company_name: 'Facebook, Inc.',
          exchange_symbol: 'NASDAQ',
          stock_symbol: 'FB',
          environment_grade: 'A',
          environment_level: 'High',
          social_grade: 'B',
          social_level: 'Medium',
          governance_grade: 'BB',
          governance_level: 'Medium',
          total_grade: 'BBB',
          total_level: 'High',
          last_processing_date: '30-11-2021',
          environment_score: 505,
          social_score: 273,
          governance_score: 315,
          total: 1093
        }
      ])
    })
}
