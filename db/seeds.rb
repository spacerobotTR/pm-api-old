# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ProjStatus.create(status_id: 1, statusdescr: 'New', statusnotify: 'primary', percent: 0)
ProjStatus.create(status_id: 2, statusdescr: 'Design', statusnotify: 'warning', percent: 5)
ProjStatus.create(status_id: 3, statusdescr: 'Proposal', statusnotify: 'warning', percent: 10)
ProjStatus.create(status_id: 4, statusdescr: 'Approval', statusnotify: 'warning', percent: 15)
ProjStatus.create(status_id: 5, statusdescr: 'Materials Ordered', statusnotify: 'warning', percent: 20)
ProjStatus.create(status_id: 6, statusdescr: 'Installation', statusnotify: 'warning', percent: 50)
ProjStatus.create(status_id: 7, statusdescr: 'Commission', statusnotify: 'info', percent: 80)
ProjStatus.create(status_id: 8, statusdescr: 'Complete', statusnotify: 'success', percent: 100)
ProjStatus.create(status_id: 9, statusdescr: 'Cancelled', statusnotify: 'danger', percent: 0)
ProjStatus.create(status_id: 10, statusdescr: 'On Hold', statusnotify: 'danger', percent: 0)
