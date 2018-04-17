# database design

## members table

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## users table

Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|

### Association
- has_many :meners
- has many :messages


## groups table

Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|

### Association
- has_many :meners
- has many :messages
- has_many :users, through: :members
