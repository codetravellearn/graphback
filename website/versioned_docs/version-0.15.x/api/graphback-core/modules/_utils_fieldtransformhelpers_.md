---
id: "_utils_fieldtransformhelpers_"
title: "utils/fieldTransformHelpers"
sidebar_label: "utils/fieldTransformHelpers"
---

## Index

### Enumerations

* [TransformType](../enums/_utils_fieldtransformhelpers_.transformtype.md)

### Interfaces

* [FieldTransform](../interfaces/_utils_fieldtransformhelpers_.fieldtransform.md)

### Type aliases

* [FieldTransformMap](_utils_fieldtransformhelpers_.md#fieldtransformmap)
* [FieldTransformer](_utils_fieldtransformhelpers_.md#fieldtransformer)

### Functions

* [getFieldTransformations](_utils_fieldtransformhelpers_.md#getfieldtransformations)

## Type aliases

###  FieldTransformMap

Ƭ **FieldTransformMap**: *object*

*Defined in [packages/graphback-core/src/utils/fieldTransformHelpers.ts:17](https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/utils/fieldTransformHelpers.ts#L17)*

#### Type declaration:

* **[TransformType.CREATE]**: *[FieldTransform](../interfaces/_utils_fieldtransformhelpers_.fieldtransform.md)[]*

* **[TransformType.UPDATE]**: *[FieldTransform](../interfaces/_utils_fieldtransformhelpers_.fieldtransform.md)[]*

___

###  FieldTransformer

Ƭ **FieldTransformer**: *function*

*Defined in [packages/graphback-core/src/utils/fieldTransformHelpers.ts:4](https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/utils/fieldTransformHelpers.ts#L4)*

#### Type declaration:

▸ (`value?`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

## Functions

###  getFieldTransformations

▸ **getFieldTransformations**(`baseType`: GraphQLObjectType): *[FieldTransformMap](_utils_fieldtransformhelpers_.md#fieldtransformmap)*

*Defined in [packages/graphback-core/src/utils/fieldTransformHelpers.ts:22](https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/utils/fieldTransformHelpers.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`baseType` | GraphQLObjectType |

**Returns:** *[FieldTransformMap](_utils_fieldtransformhelpers_.md#fieldtransformmap)*
