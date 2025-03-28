import { Patch } from '../database/types';
import addUOMs from './addUOMs';
import createInventoryNumberSeries from './createInventoryNumberSeries';
import fixRoundOffAccount from './fixRoundOffAccount';
import testPatch from './testPatch';
import updateSchemas from './updateSchemas';
import setPaymentReferenceType from './setPaymentReferenceType';
import fixLedgerDateTime from './v0_21_0/fixLedgerDateTime';
import fixItemHSNField from './fixItemHSNField';
import createPaymentMethods from './createPaymentMethods';

export default [
  { name: 'testPatch', version: '0.5.0-beta.0', patch: testPatch },
  {
    name: 'updateSchemas',
    version: '0.5.0-beta.0',
    patch: updateSchemas,
    priority: 100,
  },
  {
    name: 'addUOMs',
    version: '0.6.0-beta.0',
    patch: addUOMs,
  },
  {
    name: 'fixRoundOffAccount',
    version: '0.6.3-beta.0',
    patch: fixRoundOffAccount,
  },
  {
    name: 'createInventoryNumberSeries',
    version: '0.6.6-beta.0',
    patch: createInventoryNumberSeries,
  },
  {
    name: 'setPaymentReferenceType',
    version: '0.20.1',
    patch: setPaymentReferenceType,
  },
  {
    name: 'fixLedgerDateTime',
    version: '0.21.2',
    patch: fixLedgerDateTime,
  },
  { name: 'fixItemHSNField', version: '0.24.0', patch: fixItemHSNField },
  {
    name: 'createPaymentMethods',
    version: '0.25.1',
    patch: createPaymentMethods,
  },
] as Patch[];
