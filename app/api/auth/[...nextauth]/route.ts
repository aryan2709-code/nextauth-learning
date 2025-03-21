import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth";

const handler = NextAuth({
    providers : [
        CredentialsProvider({
            name : " email",
            credentials : {
                username : {label : "Username" , type : "text" , placeholder : "harkirat@gmail.com"},
                password : {label : "Password" , type : "password" }
            },
            async authorize(credentials , req) {
               const username = credentials?.username;
               const password = credentials?.password;

               // Databse request to check if the username and password are correct
               const user = {
                name : "harkirat",
                id : "1",
                username : "harkirat@gmail.com"
               }

               if(user)
               {
                return user;
               }else{
                return null;
               }
            }
        }),

        GoogleProvider({
            clientId : "asd",
            clientSecret : "Asd"
        }),

        GitHubProvider({
            clientId : "asd",
            clientSecret : "ads"
        })
    ]

})

export {handler as GET , handler as POST}