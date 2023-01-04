//Class to create & manage a simple linked list
public class LinkedList<T>{
    //Class to create individual nodes
    public class Node<T>{
    
        T value;
        Node next;
    
        public Node(T element, Node n){
            value = element;
            next = n;
        }
    
        public Node(T element){
            this(element, null);
        }
    }
    
    Node first;
    Node last;

    //Constructor
    public LinkedList(){
        first = null;
        last = null;
    }
    
    //Method to check if list is empty
    public boolean isEmpty(){
        return first == null;
    }
    
    //Method to return the length of the list
    public int length(){
        if(isEmpty()){
            return 0;
        }else{
            Node temp = first;
        
            int count = 1;
        
            while(temp.next != null){
                temp = temp.next;
                count++;
            }
        
            return count; 
        }
    }
    
    //Method to return a node at a specific index
    public Node getNode(int index){
        int count = 0;
        
        Node thing = first;
        
        while(count != index){
            thing = thing.next;
            count++;
        }
        return thing;
    }
    
    //Method to add a node the end of the list by default
    public void add(T element){
        if(isEmpty()){
            first = new Node(element);
            last = first;
        }else{
            last.next = new Node(element);
            last = last.next;
        }
    }
    
    //Method to add a node at a specified location
    public void add(T element, int index){
        if(index < 0 || index > length()){
            
            String error = String.valueOf(index);
            throw new IndexOutOfBoundsException(error);
            
        }else if(index == 0){
            
            Node temp = first;
            first = new Node(element);
            first.next = temp;
            
        }else{
            
            Node pre = getNode(index-1);
            Node post = getNode(index);
           
            Node newNode = new Node(element);
           
            pre.next = newNode;
            newNode.next = post;
        } 
    } 
    
    //Method to remove the last node by default
    public void remove(){
        Node pre = getNode(length()-2);
        
        pre.next = null;
        last = pre;
    }
    
    //Method to remove a node at a specified location
    public void remove(int index){
        if(index < 0 || index >= length()){
            throw new IndexOutOfBoundsException(String.valueOf(index));
        }else if(index == 0){
            first = first.next;
        }else{
            Node pre = getNode(index-1);
            Node post = getNode(index+1);
            
            pre.next = post;
        }
    }
    
    //To string method to print out the list
    @Override
    public String toString(){
        StringBuilder text = new StringBuilder();
        
        Node temp = first;
        
        while(temp != null){
            text.append(temp.value + " ");
            temp = temp.next;
        }
        
        return text.toString();
    }
}
