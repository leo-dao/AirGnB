import graphene
import graphql_jwt
from graphql_auth import mutations
from graphql_auth.schema import UserQuery, MeQuery

class AuthMutation(graphene.ObjectType):
   register = mutations.Register.Field()
   verify_account = mutations.VerifyAccount.Field()
   update_account = mutations.UpdateAccount.Field()
   resend_activation_email = mutations.ResendActivationEmail.Field()
   send_password_reset_email = mutations.SendPasswordResetEmail.Field()
   password_reset = mutations.PasswordReset.Field()
   password_change = mutations.PasswordChange.Field()

   token_auth = mutations.ObtainJSONWebToken.Field()

class Query(UserQuery, MeQuery, graphene.ObjectType):
   pass

class Mutation(AuthMutation, graphene.ObjectType):
   pass

schema = graphene.Schema(query=Query, mutation=Mutation)