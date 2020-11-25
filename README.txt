בס"ד


פרויקט ריאקט
Rooms Management






components:
* App
   * OpenningPage
      * Header
         * Customer logo 
            * link to Customer page
         * Customer name
         * Customer Credits
         * Company logo
      * Openning Massage
      * daybook
      * Start at
      * End at
      * Participant limit
      * SubmitModalBtn
         * Positive Response
            * message “מצאנו חדר בדיוק בשבילך”
            * room details
            * date 
            * hour
            * cost
            * ModalBtn confirm  
               * query to database.
               * save the date in the room.
               * send the details to the user email.
               * massage - the order confirmed.
               * BtnAddToCalendar
               * BtnAddParticipants
            * Btn cancel 
               * close the modal.
         * Negative Response
            * message “אין לנו בדיוק מה שרצית”
            * possible options:
               * same hour - another room (sort Participant limit)
               * another closest hour - same room 
               * 6 options
               * BtnSelfSearch
      *    * SelfSearch



room = 
   {
      room_id:
      room_name:
      images: []
      people_limit:
      price:
      occupied(תאריכים תפוסים): [id_room->reservation]
   
   }

reservation = 
   {
      _id: ,
      id_room: ,
      id_client: ,
      date: ,
      start: ,
      end: ,
   }

client = 
{
   _id:
   user_name:
   phone:
   email:
   password: 
   regularCustomer: Boolean (true)
   credits: 8,
   client_reservation: [id_client->reservation]
}
