import { supabase } from '../shared/supabase/supabase';
import { addDataDataType } from '../types/addDataType';
// import { Tables } from '../types/supabase';

export const addCompany = async (newCompany: addDataDataType) => {
  const { error } = await supabase
    .from('companies')
    .insert({
      id: newCompany.id,
      company: newCompany.company,
      platform: newCompany.platform,
      created_at: newCompany.created_at,
    })
    .select();
  if (error) {
    throw new Error('error');
  }
};

// export const getCompanyList = async () => {
//   const { data, error } = await supabase
//     .from('companies')
//     .select('*')
//     .returns<Tables<'companies'>[]>();
//   return { data, error };
// };
