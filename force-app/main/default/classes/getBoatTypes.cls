public class getBoatTypes {
@AuraEnabled
    public static List<BoatType__c> getBoats() {
        return [SELECT Id, Name FROM BoatType__c];
    }
}